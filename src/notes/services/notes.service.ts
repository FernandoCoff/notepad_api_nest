import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dtos/note-dto'

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateNoteDto) {
    return this.prisma.note.create({
      data,
    })
  }

  findAll() {
    return this.prisma.note.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  async findOne(id: string) {
    const note = await this.prisma.note.findUnique({
      where: { id },
    })

    if (!note) {
      throw new NotFoundException(`Nota com o ID "${id}" não encontrada.`)
    }

    return note
  }

  async update(id: string, data: UpdateNoteDto) {
    await this.findOne(id)

    return this.prisma.note.update({
      where: { id },
      data,
    })
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.prisma.note.delete({
      where: { id },
    })
  }
}
