const ApiError = require('../error/ApiError')
const brandService = require('../services/brandService')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await brandService.create(name)
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await brandService.getAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
