import {Brand} from './brands.model'
import {Module} from '@nestjs/common'
import {BrandsController} from './brands.controller'
import {BrandsService} from './brands.service'
import {SequelizeModule} from '@nestjs/sequelize'

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [SequelizeModule.forFeature([Brand])],
})
export class BrandsModule {}
