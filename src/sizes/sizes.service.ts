import {Size} from './sizes.model'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {CreateSizeDto} from './dto/create-size.dto'

@Injectable()
export class SizesService {
  constructor(@InjectModel(Size) private itemRepository: typeof Size) {}
  async createSize(dto: CreateSizeDto) {
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

  async getSizeById(id: number) {
    const items = await this.itemRepository.findByPk(id, {include: {all: true}})
    return items
  }

  async getAllSizes() {
    const items = await this.itemRepository.findAll({include: {all: true}})
    return items
  }

  async changeSize(id: number, body: Size) {
    await this.itemRepository.update(body, {where: {id}})
    const item = await this.itemRepository.findByPk(id, {include: {all: true}})
    return item
  }

  async deleteSize(id: number) {
    return await this.itemRepository.destroy({where: {id}})
  }
}
