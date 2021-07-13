const {User, Cart} = require('../models/models')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../error/ApiError");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userService {
    async registration(email, password, role, next) {
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.conflict('User with this email is already registered'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        return generateJwt(user.id, user.email, user.role)
    }

    async login(email, password, next) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.unauthorized('User with this email was not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.unauthorized('Invalid password'))
        }
        return generateJwt(user.id, user.email, user.role)
    }
}

module.exports = new userService()
