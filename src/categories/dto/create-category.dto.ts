import {ApiProperty} from '@nestjs/swagger'

export class CreateCategoryDto {
  @ApiProperty({example: 'Брюки', description: 'Название категории'})
  readonly title: string
}
