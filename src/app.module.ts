import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [BookModule, AuthorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
