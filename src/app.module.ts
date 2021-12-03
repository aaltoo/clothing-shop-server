import {Item} from './items/items.model'
import {Module} from '@nestjs/common'
import {ItemsModule} from './items/items.module'
import {SequelizeModule} from '@nestjs/sequelize'

@Module({
  controllers: [],
  providers: [],
  imports: [
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
  ],
})
export class AppModule {}
