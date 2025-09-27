// src/app.module.ts

import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
