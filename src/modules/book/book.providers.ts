import { Book } from './entities/book.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useValue: Book,
  },
];
