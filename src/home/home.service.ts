import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  home() {
    return `This action returns all home`;
  }
  layout() {
    return `This action returns all home`;
  }
}
