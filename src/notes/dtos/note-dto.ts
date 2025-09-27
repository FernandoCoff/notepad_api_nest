import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateNoteDto {
  @IsString({ message: 'O título deve ser um texto.' })
  @IsNotEmpty({ message: 'O título não pode estar vazio.' })
  title: string

  @IsString({ message: 'O conteúdo deve ser um texto.' })
  @IsNotEmpty({ message: 'O conteúdo não pode estar vazio.' })
  content: string
}

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
