import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.findTaskById(id);
  }

  @Delete(':id')
  deleteTak(@Param('id') id: string): string {
    const status = this.taskService.deleteTaskById(id);

    return 'ok';
  }

  @Post()
  @UsePipes(ValidationPipe)
  CreateTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    console.log(CreateTaskDto);
    return this.taskService.createTask(CreateTaskDto);
  }
}
