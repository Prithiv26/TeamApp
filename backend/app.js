const express = require("express")
const authRoutes = require('./routes/auth.route.js')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})