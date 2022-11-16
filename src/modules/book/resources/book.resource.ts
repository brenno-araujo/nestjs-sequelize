import { Book } from '../entities/book.entity';
export interface BookResourceInterface {
  id: number;
  title: string;
  author_id: number;
  barcode: string;
  author: {
    id: number;
    name: string;
  };
}

export class BookResource {
  public async resource(book: Book): Promise<BookResourceInterface> {
    return {
      id: book.id,
      title: book.title,
      author_id: book.author_id,
      barcode: book.barcode,
      author: {
        id: book.author.id,
        name: book.author.name,
      },
    };
  }
}
