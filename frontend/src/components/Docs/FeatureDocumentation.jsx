import React from 'react';

const FeatureDocumentation = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Feature Documentation</h1>

      <div className="grid grid-cols-1 gap-8">
        {/* Text to Image Feature */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">1. Text to Image</h2>
          <p className="mb-4">Generates an image based on a provided text prompt. Ideal for creating visuals from abstract ideas or descriptions.</p>
          <h3 className="font-semibold">API Endpoint</h3>
          <p className="mb-4"><code>POST /api/v1/text-to-image</code></p>
          <h3 className="font-semibold">Request Example</h3>
          <pre className="bg-gray-200 p-4 rounded-md">
            {`{
  "text": "A beautiful sunset over a mountain range",
  "style": "realistic" // Optional: Specify style (e.g., 'cartoon', 'sketch')
}`}
          </pre>
        </div>

        {/* Image Editing Feature */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">2. Image Editing</h2>
          <p className="mb-4">Allows users to perform basic editing tasks such as cropping, resizing, or adjusting brightness and contrast.</p>
          <h3 className="font-semibold">API Endpoint</h3>
          <p className="mb-4"><code>POST /api/v1/image-editing</code></p>
          <h3 className="font-semibold">Request Example</h3>
          <pre className="bg-gray-200 p-4 rounded-md">
            {`{
  "actions": [
    { "action": "resize", "width": 800, "height": 600 },
    { "action": "brightness", "value": 20 }
  ]
}`}
          </pre>
        </div>

        {/* Style Transfer Feature */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">3. Style Transfer</h2>
          <p className="mb-4">Applies a specified artistic style to an input image. Transform photos into artistic renditions.</p>
          <h3 className="font-semibold">API Endpoint</h3>
          <p className="mb-4"><code>POST /api/v1/style-transfer</code></p>
          <h3 className="font-semibold">Request Example</h3>
          <pre className="bg-gray-200 p-4 rounded-md">
            {`{
  "style": "Van Gogh" // Available styles: 'Van Gogh', 'Picasso', etc.
}`}
          </pre>
        </div>

        {/* Remove Background Feature */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">4. Remove Background (Remove Bg)</h2>
          <p className="mb-4">Removes the background from an input image, leaving the subject intact. Ideal for e-commerce or graphic design.</p>
          <h3 className="font-semibold">API Endpoint</h3>
          <p className="mb-4"><code>POST /api/v1/remove-bg</code></p>
          <h3 className="font-semibold">Request Example</h3>
          <pre className="bg-gray-200 p-4 rounded-md">
            {`{
  "image": "<uploaded-image-file>"
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FeatureDocumentation;
