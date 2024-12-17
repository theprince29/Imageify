import User from "../models/User.model.js";

const apiKeyMiddleware = async (req, res, next) => {
    try {
      const apiKey = req.headers['x-api-key']; // API key sent in request headers
  
      if (!apiKey) {
        return res.status(401).json({ success: false, message: 'API key is required' });
      }
  
      // Find the user with the given API key
      const user = await User.findOne({ apiKey });
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid API key' });
      }
  
      req.user = user; // Attach user to the request object
      next(); // Proceed to the next middleware/controller
    } catch (error) {
      res.status(500).json({ success: false, message: 'API key validation failed', error });
    }
  };
  
  export default apiKeyMiddleware;
  