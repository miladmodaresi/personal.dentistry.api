import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './user.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sing-up')
  singUp(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.signUp(createAuthDto);
  }
  @Post('sing-in')
  singIn(@Body() createAuthDto: SignInAuthDto) {
    return this.authService.signIn(createAuthDto);
  }

  @Get('test')
  @UseGuards(AuthGuard())
  test(@GetUser() user) {
    console.log(user);
    return user;
  }
}
