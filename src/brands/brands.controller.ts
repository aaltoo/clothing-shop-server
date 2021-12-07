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
import {CreateBrandDto} from './dto/create-brand.dto'
import {Brand} from './brands.model'
import {BrandsService} from './brands.service'

@ApiTags('Бренды')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @ApiOperation({summary: 'Создание бренда'})
  @ApiResponse({status: 200, type: Brand})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() brandDto: CreateBrandDto) {
    return this.brandsService.createBrand(brandDto)
  }

  @ApiOperation({summary: 'Получение бренда по ID'})
  @ApiResponse({status: 200, type: Brand})
  @Get(':id')
  getById(@Param('id') id) {
    return this.brandsService.getBrandById(id)
  }

  @ApiOperation({summary: 'Получение всех брендов'})
  @ApiResponse({status: 200, type: [Brand]})
  @Get()
  getAll() {
    return this.brandsService.getAllBrands()
  }

  @ApiOperation({summary: 'Изменение бренда'})
  @ApiResponse({status: 200, type: Brand})
  @Put(':id')
  change(@Param('id') id, @Body() body) {
    return this.brandsService.changeBrand(id, body)
  }

  @ApiOperation({summary: 'Удаление бренда'})
  @ApiResponse({status: 200, type: Brand})
  @Delete(':id')
  delete(@Param('id') id) {
    return this.brandsService.deleteBrand(id)
  }
}
