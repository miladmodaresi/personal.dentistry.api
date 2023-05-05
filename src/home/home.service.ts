import { Injectable } from '@nestjs/common';
import { Setting } from 'src/management/setting/entities/setting.entity';
import { SettingService } from 'src/management/setting/setting.service';
import { Slider } from 'src/management/slider/entities/slider.entity';
import { SliderService } from 'src/management/slider/slider.service';
import { User } from 'src/management/users/entities/user.entity';
import { UsersService } from 'src/management/users/users.service';

@Injectable()
export class HomeService {
  constructor(
    private readonly usersService: UsersService,
    private readonly settingService: SettingService,
    private readonly sliderService: SliderService,
  ) {}
  home(): {
    doctors: Promise<User[]>;
    sliders: Promise<Slider[]>;
    settings: Promise<object>;
  } {
    return {
      doctors: this.usersService.findDoctors(),
      sliders: this.sliderService.findAll(),
      settings: this.settingService.findHome(),
    };
  }
  layout() {
    return `This action returns all home`;
  }
}
