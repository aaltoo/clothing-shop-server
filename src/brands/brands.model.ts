import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, Model, Table} from 'sequelize-typescript'

interface BrandCreationAttrs {
  title: string
}

@Table({tableName: 'brands'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
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
