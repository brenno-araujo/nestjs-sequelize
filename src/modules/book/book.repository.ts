import { CreateBookDto } from './dto/create-book.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { Author } from '../author/entities/author.entity';
@Injectable()
export class BookRepository {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private book: typeof Book,
  ) {}

  async create(data: CreateBookDto) {
    try {
      return await this.book.create(data);
    } catch (error) {
      throw new Error('Erro ao criar livro');
    }
  }

  async findOne(barcode: string): Promise<Book> {
    console.log('barcode', barcode);
    try {
      return await this.book.findOne({
        where: { barcode },
        include: [Author]
      });
    } catch (error) {
      throw new Error('Erro ao buscar livro');
    }
  }
}
