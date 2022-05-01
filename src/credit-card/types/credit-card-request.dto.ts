import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

class CreditCardRequestDTO {
  @ApiProperty({
    description: 'Dia do pagamento da fatura',
  })
  @IsNumber()
  preferredDueDay: number;

  @ApiProperty({
    description: 'Nome do usuário',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do usuário usado para login',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário usada para login',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'CPF do usuário',
  })
  @IsNotEmpty()
  @IsNumberString()
  cpf: string;
}

export default CreditCardRequestDTO;
