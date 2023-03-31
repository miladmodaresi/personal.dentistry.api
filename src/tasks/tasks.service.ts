import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private $tasks: Task[] = [];
  public getAllTasks(): Task[] {
    return this.$tasks;
  }

  public createTask(CreateTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuid(),
      ...CreateTaskDto,
    };
    this.$tasks.push(task);
    return task;
  }
  public findTaskById(id: string): Task {
    const task = this.$tasks.find((task) => task.id === id);
    
    if (!task) throw new NotFoundException();
    
    return task;
  }
  public deleteTaskById(id: string): void {
    const index = this.$tasks.findIndex((task) => task.id === id);

    if (index === -1) throw new NotFoundException();
    this.$tasks.splice(index, 1);
  }
}
