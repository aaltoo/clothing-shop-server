import {Item} from './items/items.model'
import {Module} from '@nestjs/common'
import {ItemsModule} from './items/items.module'
import {SequelizeModule} from '@nestjs/sequelize'
import {FilesModule} from './files/files.module'
import {ConfigModule} from '@nestjs/config'
import {ServeStaticModule} from '@nestjs/serve-static'
import * as path from 'path'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Item],
      autoLoadModels: true,
      synchronize: true,
    }),
    ItemsModule,
    FilesModule,
  ],
})
export class AppModule {}
