import { Injectable } from '@nestjs/common';
import { BookRepository } from '../book.repository';

@Injectable()
export class DeleteBookService {
  constructor(private readonly repository: BookRepository) {}

  async execute(id: number) {
    return await this.repository.delete(id);
  }
}
