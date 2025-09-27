import { Module } from '@nestjs/common'
import { NotesController } from './controllers/notes.controller'
import { NotesService } from './services/notes.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
