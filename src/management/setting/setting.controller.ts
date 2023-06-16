import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('settings')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Post()
  @FormDataRequest()
  create(@Body() createSettingDto: CreateSettingDto) {
    // console.log(createSettingDto.file.Store());
    return this.settingService.create(createSettingDto);
  }

  @Get()
  findAll() {
    // return this.settingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.settingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    // return this.settingService.update(+id, updateSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.settingService.remove(+id);
  }
}
