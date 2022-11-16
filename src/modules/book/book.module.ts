import { Module } from '@nestjs/common';
import { CreateBookService } from './services/createBook.service';
import { CreateBookController } from './controllers/createBook.controller';
import { BookRepository } from './book.repository';
import { bookProviders } from './book.providers';
import { DatabaseModule } from 'src/database/database.module';
import { FindBookController } from './controllers/findBook.controller';
import { FindBookService } from './services/findBook.service';
import { UpdateBookController } from './controllers/updateBook.controller';
import { UpdateBookService } from './services/updateBook.service';
import { FindAllBookController } from './controllers/findAllBook.controller';
import { FindAllBookService } from './services/findAllBook.service';
import { DeleteBookController } from './controllers/deleteBook.controller';
import { DeleteBookService } from './services/deleteBook.service';
@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateBookController, 
    UpdateBookController,
    FindBookController,
    FindAllBookController,
    DeleteBookController
  ],
  providers: [
    CreateBookService, 
    UpdateBookService,
    FindBookService,
    FindAllBookService,
    DeleteBookService,

    BookRepository, 
    ...bookProviders
  ],
})
export class BookModule {}
