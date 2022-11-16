import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateBookRequest {
  @ApiProperty({
    description: 'Título do livro',
    example: 'O Senhor dos Anéis',
  })
  @IsNotEmpty({ message: 'Título não pode ser vazio' })
  @Length(3, 50, { message: 'Título precisa ter entre 3 e 50 caracteres' })
  title: string;

  @ApiProperty({
    description: 'Código de barras do livro',
    example: '978-85-359-0277-5',
  })
  @IsNotEmpty({ message: 'Código de barras não pode ser vazio' })
  barcode: string;

  @ApiProperty({
    description: 'ID do Autor do livro',
    example: '1',
  })
  @IsNotEmpty({ message: 'Autor não pode ser vazio' })
  author_id: number;
}
