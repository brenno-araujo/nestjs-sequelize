import { Injectable } from '@nestjs/common';
import { BookRepository } from '../book.repository';

@Injectable()
export class DeleteBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute(id: number) {
    const book = await this.repository.findById(id);
    if (!book) {
      throw new Error(
        'Livro não encontrado',
      );
    }
    await this.repository.delete(id);
    return book;
  }
}
