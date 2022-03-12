import {ApiProperty} from '@nestjs/swagger'
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import {Brand} from 'src/brands/brands.model'
import {Category} from 'src/categories/categories.model'

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

  @ApiProperty({description: 'Название'})
  @Column({type: DataType.STRING})
  title: string

  @ApiProperty({description: 'Изображение'})
  @Column({type: DataType.STRING})
  image: string

  @ApiProperty({description: 'Пол'})
  @Column({type: DataType.STRING})
  sex: string

  @ApiProperty({example: 1, description: 'ID бренда'})
  @Column({type: DataType.INTEGER})
  @ForeignKey(() => Brand)
  brandId: number

  @ApiProperty({example: 1, description: 'ID категории'})
  @Column({type: DataType.INTEGER})
  @ForeignKey(() => Category)
  categoryId: number

  @BelongsTo(() => Category)
  category: Category

  @BelongsTo(() => Brand)
  brand: Brand
}
