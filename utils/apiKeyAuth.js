function apiKeyAuth(req, res) {
    const apiKey = req.header('x-api-key') || req.header('api-key');
    const validApiKey = 'abcd1234xyz';

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

}

module.exports = apiKeyAuth;
