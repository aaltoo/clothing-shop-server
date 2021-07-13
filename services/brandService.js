const {Brand} = require('../models/models')

class brandService {
    async create(name) {
        return await Brand.create({name})
    }
    async getAll() {
        return await Brand.findAll()
    }
}

module.exports = new brandService()
