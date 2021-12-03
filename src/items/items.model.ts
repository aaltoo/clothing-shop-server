import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, Model, Table} from 'sequelize-typescript'

interface ItemCreationAttrs {
  title: string
}

@Table({tableName: 'items'})
export class Item extends Model<Item, ItemCreationAttrs> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({example: 1, description: 'ID категории'})
  @Column({type: DataType.INTEGER, allowNull: true})
  categoryId: number
}
