import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { UsersService } from 'src/management/users/users.service';
import { UsersModule } from 'src/management/users/users.module';
import { SettingService } from 'src/management/setting/setting.service';
import { SettingModule } from 'src/management/setting/setting.module';
import { SliderService } from 'src/management/slider/slider.service';
import { SliderModule } from 'src/management/slider/slider.module';

@Module({
  controllers: [HomeController],
  providers: [HomeService, UsersService, SliderService, SettingService],
  imports: [UsersModule, SettingModule, SliderModule],
})
export class HomeModule {}
