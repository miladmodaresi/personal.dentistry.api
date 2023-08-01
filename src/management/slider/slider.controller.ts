import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('slider')
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/img',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  create(
    @UploadedFile() createSliderDto: Express.Multer.File,
    @Body() data: CreateSliderDto,
  ) {
    return this.sliderService.create(createSliderDto, data);
  }

  @Get()
  findAll() {
    return this.sliderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sliderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSliderDto: UpdateSliderDto) {
    return this.sliderService.update(+id, updateSliderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sliderService.remove(+id);
  }
}
