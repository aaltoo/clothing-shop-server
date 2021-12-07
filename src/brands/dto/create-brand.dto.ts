import {ApiProperty} from '@nestjs/swagger'

export class CreateBrandDto {
  @ApiProperty({example: 'Nike', description: 'Название бренда'})
  readonly title: string
}
