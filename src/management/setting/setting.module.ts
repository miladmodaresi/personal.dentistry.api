import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';

@Module({
  imports: [
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    TypeOrmModule.forFeature([Setting]),
  ],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
