import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/is-public.decorator';
import { CreditCardService } from './credit-card.service';
import CreditCardRequestDTO from './types/credit-card-request.dto';

@IsPublic()
@ApiTags('Solitação')
@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}
  @Post('request')
  async request(@Body() creditCardRequest: CreditCardRequestDTO) {
    const approved = await this.creditCardService.createSolicitation(
      creditCardRequest,
    );
    return {
      approved,
    };
  }
}
