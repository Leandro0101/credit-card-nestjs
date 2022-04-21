import { ApiProperty } from '@nestjs/swagger';

class CreditCardRequestDTO {
  @ApiProperty({
    description: 'Dia do pagamento da fatura',
  })
  preferredDueDay: number;

  @ApiProperty({
    description: 'Nome do usuário',
  })
  name: string;

  @ApiProperty({
    description: 'Email do usuário usado para login',
  })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário usada para login',
  })
  password: string;

  @ApiProperty({
    description: 'CPF do usuário',
  })
  cpf: string;
}

export default CreditCardRequestDTO;
