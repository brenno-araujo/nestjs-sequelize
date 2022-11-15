import { Author } from './entities/author.entity';

export const authorProviders = [
  {
    provide: 'AUTHOR_REPOSITORY',
    useValue: Author,
  },
];
