import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SettingModule } from './setting/setting.module';
import { SliderModule } from './slider/slider.module';

@Module({
  imports: [UsersModule, SettingModule, SliderModule],
})
export class ManagementModule {}
