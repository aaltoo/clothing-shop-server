import {ApiProperty} from '@nestjs/swagger'

export class CreateSizeDto {
  @ApiProperty({example: 'S', description: 'Размер'})
  readonly title: string
}
