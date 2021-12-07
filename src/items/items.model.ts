import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, Model, Table} from 'sequelize-typescript'

interface ItemCreationAttrs {
  title: string
  image: string
  brandId: number
  categoryId: number
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

  @ApiProperty({description: 'Изображение'})
  @Column({type: DataType.STRING})
  image: string

  @ApiProperty({description: 'Пол'})
  @Column({type: DataType.STRING})
  sex: string

  @ApiProperty({example: 1, description: 'ID бренда'})
  @Column({type: DataType.INTEGER})
  brandId: number

  @ApiProperty({example: 1, description: 'ID категории'})
  @Column({type: DataType.INTEGER})
  categoryId: number
}
