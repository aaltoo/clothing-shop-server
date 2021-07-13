const {Type} = require('../models/models')

class typeService {
    async create(name) {
        return await Type.create({name})
    }
    async getAll() {
        return await Type.findAll()
    }
}

module.exports = new typeService()
