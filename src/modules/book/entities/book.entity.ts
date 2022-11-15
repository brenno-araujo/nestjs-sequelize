import { Table, Column, Model, BelongsTo, ForeignKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Author } from 'src/modules/author/entities/author.entity';

@Table
export class Book extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  title: string;

  @ForeignKey(() => Author)
  @Column
  author_id: number;

  @Column
  barcode: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @BelongsTo(() => Author)
  author: Author;

}
