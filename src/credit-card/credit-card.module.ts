import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { CreditCardController } from './credit-card.controller';
import { Solicitation } from './solicitation.entity';
import { CreditCardService } from './credit-card.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Solicitation])],
  exports: [TypeOrmModule],
  controllers: [CreditCardController],
  providers: [CreditCardService, UserService],
})
export class CreditCardModule {}
