import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript'
import {Item} from 'src/items/items.model'

interface CategoryCreationAttrs {
  title: string
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ForeignKey(() => Item)
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({example: 'Брюки', description: 'Название Категории'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string
}
