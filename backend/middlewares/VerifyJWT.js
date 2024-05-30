const jwt = require('jsonwebtoken');

function VerifyJWT(req, res, next) {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: 'Token Invalid, User Unauthorized', auth: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.email = decoded.email; 
        req.auth = true; 
        req.token = token;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized', auth: false });
    }
}

module.exports = VerifyJWT;
