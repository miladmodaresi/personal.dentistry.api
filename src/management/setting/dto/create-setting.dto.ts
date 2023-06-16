import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateSettingDto {
  slug: string;
  value: string;
  name: string;
}
