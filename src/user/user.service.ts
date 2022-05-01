import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserDTO from './types/user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createUser(user: UserDTO) {
    const encryptPAssword = await this.encryptPAssword(user.password);
    const userEntity = this.userRepository.create({
      ...user,
      password: encryptPAssword,
    });
    return await this.userRepository.save(userEntity);
  }

  private async encryptPAssword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
