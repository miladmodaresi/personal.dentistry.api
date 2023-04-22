import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/management/users/entities/user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  return req.switchToHttp().getRequest().user;
});
