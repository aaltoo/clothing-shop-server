import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript'
import {Item} from 'src/items/items.model'

interface BrandCreationAttrs {
  title: string
}

@Table({tableName: 'brands'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
  @ForeignKey(() => Item)
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({example: 'Nike', description: 'Название бренда'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string
}
