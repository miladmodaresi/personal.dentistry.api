import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(page, limit) {
    return paginate(this.userRepository, {
      page,
      limit,
    });
  }

  findWithTypes(page, limit, type: number) {
    // const queryBuilder = this.userRepository
    //   .createQueryBuilder('users')
    //   .where('users.type = :type', { type });

    return paginate(this.userRepository, {
      page,
      limit,
    });
  }

  findDoctors(): Promise<User[]> {
    return this.userRepository.find({
      where: {
        type: 2,
      },
      take: 10,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
