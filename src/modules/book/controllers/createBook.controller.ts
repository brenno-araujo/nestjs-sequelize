import { Controller, Post, Body } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { CreateBookService } from '../services/createBook.service';

@Controller('book')
export class CreateBookController {
  constructor(private readonly createBookService: CreateBookService) {}

  @Post()
  async create(@Body() data: CreateBookDto) {
    try {
      return await this.createBookService.execute(data);
    } catch (error) {
      return { message: error.message };
    }
  }
}
