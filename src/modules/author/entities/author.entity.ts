import {
  Table,
  Column,
  Model,
  HasMany,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';
import { Book } from 'src/modules/book/entities/BOOK.entity';

@Table
export class Author extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  name: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @HasMany(() => Book)
  books: Book[];
}
