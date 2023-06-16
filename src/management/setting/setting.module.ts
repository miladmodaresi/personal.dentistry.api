import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Setting]),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
  ],
  controllers: [SettingController],
  providers: [SettingService],
  exports: [SettingService, TypeOrmModule],
})
export class SettingModule {}
