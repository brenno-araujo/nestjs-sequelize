import { Injectable } from '@nestjs/common';
import { BookRepository } from '../book.repository';

@Injectable()
export class FindAllBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute() {
    const books = await this.repository.findAll();
    if (!books) {
      throw new Error(
        'Livros não encontrados',
      );
    }
    return books;
  }
}
