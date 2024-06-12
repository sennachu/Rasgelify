const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Örnek olarak, burada token'da gelen kullanıcının rolünü kontrol edebiliriz
        // if (decoded.user.role !== 'admin') {
        //     return res.status(403).json({ msg: 'Unauthorized access' });
        // }

        req.user = decoded.user;
        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = auth;
