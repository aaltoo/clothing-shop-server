import {ApiProperty} from '@nestjs/swagger'

export class CreateItemDto {
  @ApiProperty({example: '', description: 'Название товара'})
  readonly title: string
  @ApiProperty({example: 1, description: 'ID категории'})
  readonly brandId: number
  @ApiProperty({example: 1, description: 'ID категории'})
  readonly categoryId: number
  @ApiProperty({description: 'Изображение'})
  readonly image: string
  @ApiProperty({example: 1, description: 'Price'})
  readonly price: number
  @ApiProperty({
    example: [
      {
        price: 200,
        mass: 150,
      },
    ],
    description: 'Размеры',
  })
  readonly sizes: {
    price: number
    mass: number
  }[]
}
