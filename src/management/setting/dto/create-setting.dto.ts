import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateSettingDto {
  file: MemoryStoredFile;
}
