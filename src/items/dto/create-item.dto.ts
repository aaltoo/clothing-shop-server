import {ApiProperty} from '@nestjs/swagger'

export class CreateItemDto {
  @ApiProperty({example: 'Пепперони', description: 'Название товара'})
  readonly title: string
  @ApiProperty({example: 1, description: 'ID категории'})
  readonly categoryId: number
  @ApiProperty({example: false, description: 'Статичный или нет'})
  readonly isStatic: boolean
  @ApiProperty({description: 'Изображение'})
  readonly image: string
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
