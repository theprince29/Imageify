import pkg from 'jsonwebtoken';
const { verify } = pkg;
    export function identifier(req, res, next) {
        let token;
        if (req.headers.client === 'not-browser') {
            token = req.headers.authorization;
        } else {
            token = req.cookies['Authorization'];
        }

        if (!token) {
            return res.status(403).json({ success: false, message: 'Unauthorized' });
        }

        try {
            const userToken = token.split(' ')[1];
            const jwtVerified = verify(userToken, process.env.JWT_SECRET);
            if (jwtVerified) {
                req.user = jwtVerified;
                next();
            } else {
                throw new Error('error in the token');
            }
        } catch (error) {
            console.log(error);
        }
    }