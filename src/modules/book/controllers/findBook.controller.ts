import { Controller, Get } from '@nestjs/common';
import { FindBookService } from '../services/findBook.service';
import { Param } from '@nestjs/common';
import { BookResource, BookResourceInterface } from '../resources/book.resource';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('books')
@Controller('book:')
export class FindBookController {
  constructor(private readonly findBookService: FindBookService) {}

  @Get()
  async find(@Param('barcode') barcode: string) : Promise<BookResourceInterface | {message: string}>   {
    try {
      return new BookResource().resource(await this.findBookService.execute(barcode));
    } catch (error) {
      return { message: error.message };
    }
  }
}
