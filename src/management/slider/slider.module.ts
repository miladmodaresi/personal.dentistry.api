import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  controllers: [SliderController],
  providers: [SliderService],
  imports: [
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    AuthModule,
    TypeOrmModule.forFeature([Slider]),
  ],
  exports: [SliderService, TypeOrmModule],
})
export class SliderModule {}
