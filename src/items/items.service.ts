import {Item} from './items.model'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {CreateItemDto} from './dto/create-item.dto'
import {FilesService} from 'src/files/files.service'

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item) private itemRepository: typeof Item,
    private filesService: FilesService,
  ) {}
  async createItem(dto: CreateItemDto, image: any) {
    try {
      const fileName = await this.filesService.createFile(image)
      const item = await this.itemRepository.create({
        ...dto,
        image: fileName,
      })
      const createdItem = await this.itemRepository.findByPk(item.id, {
        include: {all: true},
      })
      return createdItem
    } catch (err) {
      return err
    }
  }

  async getItemById(id: number) {
    const items = await this.itemRepository.findByPk(id, {include: {all: true}})
    return items
  }

  async getAllItems() {
    const items = await this.itemRepository.findAll({include: {all: true}})
    return items
  }

  async changeItem(id: number, body: Item) {
    await this.itemRepository.update(body, {where: {id}})
    const item = await this.itemRepository.findByPk(id, {include: {all: true}})
    return item
  }

  async deleteItem(id: number) {
    return await this.itemRepository.destroy({where: {id}})
  }
}
