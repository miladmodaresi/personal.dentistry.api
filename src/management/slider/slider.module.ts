import { Module } from '@nestjs/common';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';

@Module({
  controllers: [SliderController],
  providers: [SliderService],
  imports: [AuthModule, TypeOrmModule.forFeature([Slider])],
})
export class SliderModule {}
