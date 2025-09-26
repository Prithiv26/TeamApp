const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const toLogin = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password){
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        })
    }
    try{
        const user = await User.findOne({username})
        if (!user){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        const tokenPayload = {
            username,
            userId: user._id,
            role: user.role || 'user'
        }

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
        res.status(201).json({
            success: true,
            message: 'Logged in successfully',
            data: {
                token,
                user: {
                    ...tokenPayload
                }
            }
        })
    }
    catch(error){
        console.error('Error in login controller', error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
    
}







module.exports = {
    toLogin
}