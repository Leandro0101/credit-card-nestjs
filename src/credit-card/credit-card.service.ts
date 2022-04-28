import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import SolicitationStatus from './enum/solicitation-status.enum';
import { Solicitation } from './solicitation.entity';
import CreditCardRequestDTO from './types/credit-card-request.dto';

@Injectable()
export class CreditCardService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Solicitation)
    private solicationRepository: Repository<Solicitation>,
  ) {}
  async createSolicitation(creditCardRequest: CreditCardRequestDTO) {
    const user = await this.userRepository.save(
      this.userRepository.create({
        name: creditCardRequest.name,
        cpf: creditCardRequest.cpf,
        email: creditCardRequest.email,
        password: creditCardRequest.password,
      }),
    );

    const approved = this.isApproved();

    await this.solicationRepository.save(
      this.solicationRepository.create({
        preferredDueDay: creditCardRequest.preferredDueDay,
        user,
        status: approved
          ? SolicitationStatus.APPROVED
          : SolicitationStatus.DENIED,
      }),
    );

    return approved;
  }

  private isApproved() {
    const score = this.requestScore();

    return score >= 600;
  }

  private requestScore() {
    return this.randomIntFromInterval(0, 1000);
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
