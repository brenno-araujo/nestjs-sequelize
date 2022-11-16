import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookRepository } from '../book.repository';

@Injectable()
export class UpdateBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute(id: number, data: CreateBookDto) {
    const bookExists = await this.repository.findById(id);
    if (!bookExists) {
      throw new Error('Livro não encontrado');
    }

    const bookExistsBarcode = await this.repository.findOne(data.barcode);
    if (bookExistsBarcode && bookExistsBarcode.id != id) {
      throw new Error(
        `Código de barras já cadastrado para o livro '${bookExistsBarcode.title}'`,
      );
    }

    const book = await this.repository.update(data, id);
    if (!book) {
      throw new Error('Erro ao atualizar livro');
    }
    return book;
  }
}
