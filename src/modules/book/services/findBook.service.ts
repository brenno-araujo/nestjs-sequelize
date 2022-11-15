import { Injectable } from '@nestjs/common';
import { BookRepository } from '../book.repository';

@Injectable()
export class FindBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute(barcode: string) {
    console.log('barcode', barcode);
    const book = await this.repository.findOne(barcode);
    if (!book) {
      throw new Error(
        'Livro não encontrado',
      );
    }
    return book;
  }
}
