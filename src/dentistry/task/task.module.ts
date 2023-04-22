import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [AuthModule, TypeOrmModule.forFeature([Task])],
})
export class TaskModule {}
