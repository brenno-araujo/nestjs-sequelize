import { IsNotEmpty, Length } from 'class-validator';

export class CreateBookRequest {
  @IsNotEmpty({ message: 'Título não pode ser vazio' })
  @Length(3, 10, { message: 'Título precisa ter entre 3 e 10 caracteres' })
  title: string;

  barcode: string;
  author_id: number;
}