import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common'
import {FileInterceptor} from '@nestjs/platform-express'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {CreateCategoryDto} from './dto/create-category.dto'
import {Category} from './categories.model'
import {CategoriesService} from './categories.service'

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({summary: 'Создание категории'})
  @ApiResponse({status: 200, type: Category})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(categoryDto)
  }

  @ApiOperation({summary: 'Получение категории по ID'})
  @ApiResponse({status: 200, type: Category})
  @Get(':id')
  getById(@Param('id') id) {
    return this.categoriesService.getCategoryById(id)
  }

  @ApiOperation({summary: 'Получение всех категорий'})
  @ApiResponse({status: 200, type: [Category]})
  @Get()
  getAll() {
    return this.categoriesService.getAllCategories()
  }

  @ApiOperation({summary: 'Изменение категории'})
  @ApiResponse({status: 200, type: Category})
  @Put(':id')
  change(@Param('id') id, @Body() body) {
    return this.categoriesService.changeCategory(id, body)
  }

  @ApiOperation({summary: 'Удаление категории'})
  @ApiResponse({status: 200, type: Category})
  @Delete(':id')
  delete(@Param('id') id) {
    return this.categoriesService.deleteCategory(id)
  }
}
