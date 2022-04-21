import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { CreditCardController } from './credit-card.controller';
import { Solicitation } from './solicitation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Solicitation])],
  exports: [TypeOrmModule],
  controllers: [CreditCardController],
})
export class CreditCardModule {}
