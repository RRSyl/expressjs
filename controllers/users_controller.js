const { users } = require('../models')

class UserController {
    static async create(req, res, next){
        const {email, gender, password, role} = req.body
        const data = await users.create({
            email, gender, password, role
        })

        res.status(201).json(data);
    }
}

module.exports = UserController