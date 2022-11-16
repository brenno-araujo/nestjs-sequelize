import { Controller, Put, Body, Res, Param } from '@nestjs/common';
import { UpdateBookService } from '../services/updateBook.service';
import { UpdateBookRequest } from '../requests/updateBook.request';
import { validate } from 'class-validator';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('books')
@Controller('book')
export class UpdateBookController {
  constructor(private readonly updateBookService: UpdateBookService) {}

  @Put(':id')
  async update(@Param('id') id: number, @Res() response: Response, @Body() data: UpdateBookRequest) {
    try {
      let request = new UpdateBookRequest();
      request = data;
      validate(request);
      const createBook = await this.updateBookService.execute(id, data);
      return response.status(200).json(createBook);
    } catch (error) {
      return response.status(400).json({
        statusCode: 400,
        message: [error.message],
        error: 'Bad Request',
      });
    }
  }
}
