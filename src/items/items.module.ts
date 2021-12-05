import {Item} from './items.model'
import {Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import {ItemsController} from './items.controller'
import {ItemsService} from './items.service'
import {FilesModule} from 'src/files/files.module'

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [SequelizeModule.forFeature([Item]), FilesModule],
})
export class ItemsModule {}
