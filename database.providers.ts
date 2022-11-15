import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/modules/book/entities/book.entity';
import { Author } from './src/modules/author/entities/author.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'pgf',
      });
      sequelize.addModels([
        Author,
        Book
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];