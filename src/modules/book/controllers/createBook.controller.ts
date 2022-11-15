import { Controller, Post, Body, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { CreateBookService } from '../services/createBook.service';
import { CreateBookRequest } from '../requests/createBook.request';
import { validate } from 'class-validator';
import { Response } from 'express';

@Controller('book')
export class CreateBookController {
  constructor(private readonly createBookService: CreateBookService) {}

  @Post()
  async create(@Res() response: Response, @Body() data: CreateBookRequest) {
    try {
      let request = new CreateBookRequest();
      request = data;
      validate(request);
      const createBook = await this.createBookService.execute(data);
      return response.status(201).json(createBook);
    } catch (error) {
      return response.status(400).json({
        statusCode: 400,
        message: [error.message],
        error: 'Bad Request',
      });
    }
  }
}
