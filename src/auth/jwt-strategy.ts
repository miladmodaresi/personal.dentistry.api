import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayloadDto } from './dto/payload.dto';
import { User } from 'src/management/users/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234',
    });
  }
  async validate(payload: JwtPayloadDto) {
    const name = payload.name;
    const user = await User.findOne({ where: { name } });
    if (!user) throw new UnauthorizedException('Un Authenticated');

    return user;
  }
}
