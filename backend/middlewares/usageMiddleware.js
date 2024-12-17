const usageTracker = async (req, res, next) => {
    try {
      const user = req.user; // Retrieved from `apiKeyMiddleware`
  
      if (!user.isWithinUsageLimit()) {
        return res.status(403).json({ success: false, message: 'API usage limit exceeded. Upgrade your plan.' });
      }
  
      // Increment usage count
      user.usageCount += 1;
      await user.save();
  
      next();
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to track usage', error });
    }
  };
  
  export default usageTracker;
  