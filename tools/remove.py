from flask import Flask, request, jsonify, send_file,render_template_string
from flask_cors import CORS
from rembg import remove
from PIL import Image
import io
import os

app = Flask(__name__)

# Ensure the 'uploads' folder exists
if not os.path.exists('uploads'):
    os.makedirs('uploads')
    
# HTML template for the home page
html_template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Removal</title>
</head>
<body>
    <h1>Upload an Image to Remove Background</h1>
    <form action="/remove-background" method="post" enctype="multipart/form-data">
        <label for="file">Select an image:</label>
        <input type="file" id="file" name="file" accept="image/*" required>
        <br><br>
        <button type="submit">Upload</button>
    </form>
</body>
</html>
"""

@app.route('/')
def home():
    return render_template_string(html_template)    
    

@app.route('/remove-background', methods=['POST'])
def remove_background():
    # Check if the request contains a file
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files['file']
    
    # Ensure the file is a valid image
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    try:
        # Read the uploaded image
        img_data = file.read()
        
        # Use rembg to remove the background
        output = remove(img_data)
        
        # Convert byte data back to image using PIL
        img = Image.open(io.BytesIO(output))
        
        # Save the output image to a temporary file
        output_path = os.path.join('uploads', 'output.png')
        img.save(output_path)
        
        # Return the processed image
        return send_file(output_path, mimetype='image/png')
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)