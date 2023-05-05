import { Injectable } from '@nestjs/common';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { Slider } from './entities/slider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SliderService {
  constructor(private readonly sliderRepository: Repository<Slider>) {}
  create(createSliderDto: CreateSliderDto) {
    return 'This action adds a new slider';
  }

  findAll(): Promise<Slider[]> {
    return this.sliderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} slider`;
  }

  update(id: number, updateSliderDto: UpdateSliderDto) {
    return `This action updates a #${id} slider`;
  }

  remove(id: number) {
    return `This action removes a #${id} slider`;
  }
}
