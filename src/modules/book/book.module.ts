import { Module } from '@nestjs/common';
import { CreateBookService } from './services/createBook.service';
import { CreateBookController } from './controllers/createBook.controller';
import { BookRepository } from './book.repository';
import { bookProviders } from './book.providers';
import { DatabaseModule } from 'src/database/database.module';
import { FindBookController } from './controllers/findBook.controller';
import { FindBookService } from './services/findBook.service';
@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateBookController, 
    FindBookController
  ],
  providers: [
    CreateBookService, 
    FindBookService,
    BookRepository, 
    ...bookProviders
  ],
})
export class BookModule {}
