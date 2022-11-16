import { Controller, Delete } from '@nestjs/common';
import { DeleteBookService } from '../services/deleteBook.service';
import { Param } from '@nestjs/common';
import { BookResource, BookResourceInterface } from '../resources/book.resource';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('books')
@Controller('book:')
export class DeleteBookController {
  constructor(private readonly service: DeleteBookService) {}

  @Delete(':id')
  async find(@Param('id') id: number) : Promise<BookResourceInterface | {message: string}>   {
    try {
      return new BookResource().resource(await this.service.execute(id));
    } catch (error) {
      return { message: error.message };
    }
  }
}
