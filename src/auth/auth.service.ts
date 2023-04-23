import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/management/users/entities/user.entity';
import { JwtPayloadDto } from './dto/payload.dto';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async signIn(signInAuthDto: SignInAuthDto) {
    const user = await User.findOne({
      where: { username: signInAuthDto.username },
    });
    const validate = await user.validatePassword(signInAuthDto.password);
    if (!validate) throw new UnauthorizedException('wrong password');

    const payload: JwtPayloadDto = { id: user.id };
    const accesstoken = await this.jwtService.sign(payload);
    return { accesstoken };
  }

  async signUp(signUpAuthDto: SignUpAuthDto) {
    const user = new User();
    user.name = signUpAuthDto.name;
    user.username = signUpAuthDto.username;
    user.family = signUpAuthDto.family;
    user.role = 'user';
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(signUpAuthDto.password, user.salt);

    user.save();
    return 'This action adds a new auth';
  }
}
