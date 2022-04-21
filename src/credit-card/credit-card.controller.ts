import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Solicitation } from './solicitation.entity';
import CreditCardRequestDTO from './types/credit-card-request.dto';

@ApiTags('Solitação')
@Controller('credit-card')
export class CreditCardController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Solicitation)
    private solicationRepository: Repository<Solicitation>,
  ) {}
  @Post('request')
  async request(@Body() creditCardRequest: CreditCardRequestDTO) {
    const user = await this.userRepository.save(
      this.userRepository.create({
        name: creditCardRequest.name,
        cpf: creditCardRequest.cpf,
        email: creditCardRequest.email,
        password: creditCardRequest.password,
      }),
    );

    await this.solicationRepository.save(
      this.solicationRepository.create({
        preferredDueDay: creditCardRequest.preferredDueDay,
        user,
        status: 'APPROVED',
      }),
    );
    console.log(await this.userRepository.find());
    return {
      approved: true,
    };
  }
}
