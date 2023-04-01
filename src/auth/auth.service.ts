import { Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';

@Injectable()
export class AuthService {
  signIn(signInAuthDto: SignInAuthDto) {
    return 'This action adds a new auth';
  }
  signUp(signUpAuthDto: SignUpAuthDto) {
    return 'This action adds a new auth';
  }
}
