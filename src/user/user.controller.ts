import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth('JWT')
@Controller('user')
export class UserController {
  @Get()
  getHello(): string {
    return 'Olá, vc está na minha api';
  }
}
