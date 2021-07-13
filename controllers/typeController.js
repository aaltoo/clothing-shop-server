const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const typeService = require('../services/typeService')

class TypeController {
    async create(req, res) {
        try {
            const {name} = req.body
            const type = await typeService.create(name)
            return res.json(type)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const types = await typeService.getAll()
            return res.json(types)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new TypeController()
