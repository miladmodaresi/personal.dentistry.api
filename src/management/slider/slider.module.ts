import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [SliderController],
  providers: [SliderService],
  imports: [
    MulterModule.register({ dest: 'public/img' }),
    AuthModule,
    TypeOrmModule.forFeature([Slider]),
  ],
  exports: [SliderService, TypeOrmModule],
})
export class SliderModule {}
