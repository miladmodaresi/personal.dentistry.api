import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [UsersModule, SettingModule],
})
export class ManagementModule {}
