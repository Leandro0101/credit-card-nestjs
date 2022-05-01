import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDataDTO {
  @ApiProperty({
    description: 'Email do usuário usado para login',
  })
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    description: 'Senha do usuário usado para login',
  })
  @IsNotEmpty()
  password: string;
}

export default LoginDataDTO;
