const jwt= require("jsonwebtoken")
const bookModel= require("../controllers/userControllers")
const secretKey= "techproject"


const loginCheck = async function(req, res, next) {
    try {

        let token = req.headers['x-api-key']
        if (!token) {
            return res.status(403).send({ status: false, message: `Missing authentication token in request` })
        }

        let decoded = await jwt.verify(token, secretKey)

        if (!decoded) {
            return res.status(403).send({ status: false, message: `Invalid authentication token in request` })
        }

        
        next()
    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

module.exports.loginCheck=loginCheck;