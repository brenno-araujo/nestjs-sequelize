import { IsNotEmpty, Length } from 'class-validator';

export class CreateBookRequest {
  @IsNotEmpty({ message: 'Título não pode ser vazio' })
  @Length(3, 10, { message: 'Título precisa ter entre 3 e 10 caracteres' })
  title: string;

  @IsNotEmpty({ message: 'Código de barras não pode ser vazio' })
  barcode: string;
  
  @IsNotEmpty({ message: 'Autor não pode ser vazio' })
  author_id: number;
}
