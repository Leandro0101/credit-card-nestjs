import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException();
    const payload = { email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
