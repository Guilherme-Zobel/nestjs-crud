import { TaskService } from './shared/task.service';
import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task ): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @BBody() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.update(task);
  }
}

