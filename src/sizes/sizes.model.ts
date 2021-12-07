import {ApiProperty} from '@nestjs/swagger'
import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript'
import {Item} from 'src/items/items.model'

interface SizeCreationAttrs {
  title: string
}

@Table({tableName: 'sizes'})
export class Size extends Model<Size, SizeCreationAttrs> {
  @ForeignKey(() => Item)
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({example: 'S', description: 'Размер'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string
}
