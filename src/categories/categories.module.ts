import {Category} from './categories.model'
import {Module} from '@nestjs/common'
import {CategoriesController} from './categories.controller'
import {CategoriesService} from './categories.service'
import {SequelizeModule} from '@nestjs/sequelize'

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category])],
})
export class CategoriesModule {}
