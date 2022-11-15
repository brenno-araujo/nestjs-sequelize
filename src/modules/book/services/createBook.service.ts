import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookRepository } from '../book.repository';

@Injectable()
export class CreateBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute(data: CreateBookDto) {
    const bookExists = await this.repository.findOne(data.barcode);
    if (bookExists) {
      throw new Error(
        'Código de barras já cadastrado para o livro ',
      );
    }

    const book = await this.repository.create(data);
    if (!book) {
      throw new Error('Erro ao criar livro');
    }
    return book;
  }
}
