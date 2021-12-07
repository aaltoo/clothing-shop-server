import {Category} from './categories.model'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {CreateCategoryDto} from './dto/create-category.dto'

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private itemRepository: typeof Category) {}
  async createCategory(dto: CreateCategoryDto) {
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

  async getCategoryById(id: number) {
    const items = await this.itemRepository.findByPk(id, {include: {all: true}})
    return items
  }

  async getAllCategories() {
    const items = await this.itemRepository.findAll({include: {all: true}})
    return items
  }

  async changeCategory(id: number, body: Category) {
    await this.itemRepository.update(body, {where: {id}})
    const item = await this.itemRepository.findByPk(id, {include: {all: true}})
    return item
  }

  async deleteCategory(id: number) {
    return await this.itemRepository.destroy({where: {id}})
  }
}
