import { CreateBookDto } from './dto/create-book.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { Author } from '../author/entities/author.entity';
import { UpdateBookDto } from './dto/update-book.dto';
@Injectable()
export class BookRepository {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private book: typeof Book,
  ) {}

  async create(data: CreateBookDto): Promise<Book> {
    try {
      return await this.book.create(data);
    } catch (error) {
      throw new Error('Erro ao criar livro');
    }
  }

  async findOne(barcode: string): Promise<Book> {
    try {
      return await this.book.findOne({
        where: { barcode },
        include: [Author],
      });
    } catch (error) {
      throw new Error('Erro ao buscar livro');
    }
  }

  async findById(id: number): Promise<Book> {
    try {
      return await this.book.findByPk(id, {
        include: [Author],
      });
    } catch (error) {
      throw new Error('Erro ao buscar livro');
    }
  }

  async findAll(): Promise<Book[]> {
    try {
      return await this.book.findAll({
        include: [Author],
      });
    } catch (error) {
      throw new Error('Erro ao buscar livros');
    }
  }

  async update(data: UpdateBookDto, id: number): Promise<Book> {
    try {
      const book = await this.findById(id);
      return await book.update(data);
    } catch (error) {
      throw new Error('Erro ao atualizar livro');
    }
  }

  async delete(id: number): Promise<Book> {
    try {
      const book = await this.findById(id);
      await book.destroy();
      return book;
    } catch (error) {
      throw new Error('Erro ao excluir livro');
    }
  }
}
