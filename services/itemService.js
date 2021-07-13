const {Item, ItemInfo} = require('../models/models')

class itemService {
    async create(item) {
        let {name, price, brandId, typeId, info, img} = item

        const createdItem = await Item.create({name, price, brandId, typeId, img})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i => {
                ItemInfo.create({
                    title: i.title,
                    description: i.description,
                    itemId: item.id
                })
            })
        }

        return createdItem
    }
}

module.exports = new itemService()
