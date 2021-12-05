import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import {FileInterceptor} from '@nestjs/platform-express'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {CreateItemDto} from './dto/create-item.dto'
import {Item} from './items.model'
import {ItemsService} from './items.service'

@ApiTags('Товары')
@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @ApiOperation({summary: 'Создание товара'})
  @ApiResponse({status: 200, type: Item})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() itemDto: CreateItemDto, @UploadedFile() image) {
    return this.itemsService.createItem(itemDto, image)
  }

  @ApiOperation({summary: 'Получение товара по ID'})
  @ApiResponse({status: 200, type: Item})
  @Get(':id')
  getById(@Param('id') id) {
    return this.itemsService.getItemById(id)
  }

  @ApiOperation({summary: 'Получение всех товаров'})
  @ApiResponse({status: 200, type: [Item]})
  @Get()
  getAll() {
    return this.itemsService.getAllItems()
  }

  @ApiOperation({summary: 'Изменение товара'})
  @ApiResponse({status: 200, type: Item})
  @Put(':id')
  change(@Param('id') id, @Body() body) {
    return this.itemsService.changeItem(id, body)
  }

  @ApiOperation({summary: 'Удаление товара'})
  @ApiResponse({status: 200, type: Item})
  @Delete(':id')
  delete(@Param('id') id) {
    return this.itemsService.deleteItem(id)
  }
}
