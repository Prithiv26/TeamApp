const jwt = require('jsonwebtoken')

const userAuth = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token){
        return res.status(401).json({
            success: false,
            message: "Access token missing"
        })
    }
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.userInfo = decodedToken
        next()
    }
    catch(error){
        console.error("Error in user auth middleware")
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

module.exports = userAuth