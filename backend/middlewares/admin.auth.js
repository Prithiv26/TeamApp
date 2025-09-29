const adminAuth = (req, res, next) => {
    if (req.userInfo.role !== 'admin'){
        return res.status(403).json({
            sucess: false,
            message: "Admin rights required"
        })
    }
    next()
}

module.exports = adminAuth