import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingService {
  constructor(private readonly settingRepository: Repository<Setting>) {}

  create(createSettingDto: CreateSettingDto) {
    return 'create';
  }

  findAll() {
    return `This action returns all setting`;
  }

  async findHome() {
    const settings = await this.settingRepository.find();
    const result = {};

    settings.forEach((element) => {
      result[element.slug] = element.value;
    });

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return `This action updates a #${id} setting`;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
