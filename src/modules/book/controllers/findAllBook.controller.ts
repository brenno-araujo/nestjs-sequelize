import { Controller, Get } from '@nestjs/common';
import { FindAllBookService } from '../services/findAllBook.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('books')
@Controller('book')
export class FindAllBookController {
  constructor(private readonly service: FindAllBookService) {}
  @Get()
  async findAll() { 
    try {
      return await this.service.execute();
    } catch (error) {
      return { message: error.message };
    }
  }
}
