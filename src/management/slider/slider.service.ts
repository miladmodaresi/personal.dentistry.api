import { Injectable } from '@nestjs/common';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { Slider } from './entities/slider.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SliderService {
  constructor(
    @InjectRepository(Slider)
    private readonly sliderRepository: Repository<Slider>,
  ) {}
  create(file: Express.Multer.File, input: CreateSliderDto) {
    const data = { path: 'img/' + file.filename, ...input };
    return this.sliderRepository.create(data).save();
  }

  findAll(): Promise<Slider[]> {
    return this.sliderRepository.find();
  }

  findOne(id: number) {
    return this.sliderRepository.findOneBy({
      id,
    });
  }

  update(id: number, updateSliderDto: UpdateSliderDto) {
    return `This action updates a #${id} slider`;
  }

  remove(id: number) {
    return `This action removes a #${id} slider`;
  }
}
