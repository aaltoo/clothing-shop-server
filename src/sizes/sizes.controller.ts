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
import {CreateSizeDto} from './dto/create-size.dto'
import {Size} from './sizes.model'
import {SizesService} from './sizes.service'

@ApiTags('Размеры')
@Controller('sizes')
export class SizesController {
  constructor(private sizesService: SizesService) {}

  @ApiOperation({summary: 'Создание размера'})
  @ApiResponse({status: 200, type: Size})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() brandDto: CreateSizeDto) {
    return this.sizesService.createSize(brandDto)
  }

  @ApiOperation({summary: 'Получение размера по ID'})
  @ApiResponse({status: 200, type: Size})
  @Get(':id')
  getById(@Param('id') id) {
    return this.sizesService.getSizeById(id)
  }

  @ApiOperation({summary: 'Получение всех размеров'})
  @ApiResponse({status: 200, type: [Size]})
  @Get()
  getAll() {
    return this.sizesService.getAllSizes()
  }

  @ApiOperation({summary: 'Изменение размера'})
  @ApiResponse({status: 200, type: Size})
  @Put(':id')
  change(@Param('id') id, @Body() body) {
    return this.sizesService.changeSize(id, body)
  }

  @ApiOperation({summary: 'Удаление размера'})
  @ApiResponse({status: 200, type: Size})
  @Delete(':id')
  delete(@Param('id') id) {
    return this.sizesService.deleteSize(id)
  }
}
