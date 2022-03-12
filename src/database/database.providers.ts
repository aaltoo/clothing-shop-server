import {Sequelize} from 'sequelize-typescript'
import {Brand} from 'src/brands/brands.model'
import {Category} from 'src/categories/categories.model'
import {Item} from 'src/items/items.model'
import {Size} from 'src/sizes/sizes.model'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize('', '', '', {
        dialect: 'mysql',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [Item, Brand, Size, Category],
      })
      sequelize.addModels([Size, Item, Category, Brand])
      await sequelize.sync()
      return sequelize
    },
  },
]
