const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'pfe_2022'); //Key for encoded token
        next();
    } catch {
        res.status(401).json({
            
            error: new Error('Invalid request!')
        });
    }
};