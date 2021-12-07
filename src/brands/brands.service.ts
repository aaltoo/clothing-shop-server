import {Brand} from './brands.model'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {CreateBrandDto} from './dto/create-brand.dto'

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand) private itemRepository: typeof Brand) {}
  async createBrand(dto: CreateBrandDto) {
    try {
      const item = await this.itemRepository.create(dto)
      const createdItem = await this.itemRepository.findByPk(item.id, {
        include: {all: true},
      })
      return createdItem
    } catch (err) {
      return err
    }
  }

  async getBrandById(id: number) {
    const items = await this.itemRepository.findByPk(id, {include: {all: true}})
    return items
  }

  async getAllBrands() {
    const items = await this.itemRepository.findAll({include: {all: true}})
    return items
  }

  async changeBrand(id: number, body: Brand) {
    await this.itemRepository.update(body, {where: {id}})
    const item = await this.itemRepository.findByPk(id, {include: {all: true}})
    return item
  }

  async deleteBrand(id: number) {
    return await this.itemRepository.destroy({where: {id}})
  }
}
