import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { User } from 'src/management/users/entities/user.entity';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  GetHome(): {
    doctors: Promise<User[]>;
  } {
    return this.homeService.home();
  }
  @Get('settings')
  GetLayout() {
    return this.homeService.layout();
  }
}
