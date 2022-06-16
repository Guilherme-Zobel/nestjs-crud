import { Task } from './task';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, desciption: 'Tarefa 1', completed: false },
    { id: 2, desciption: 'Tarefa 2', completed: false },
    { id: 3, desciption: 'Tarefa 3', completed: false },
    { id: 4, desciption: 'Tarefa 4', completed: false },
    { id: 5, desciption: 'Tarefa 5', completed: false },
    { id: 6, desciption: 'Tarefa 6', completed: false },
    { id: 7, desciption: 'Tarefa 7', completed: false },
    { id: 8, desciption: 'Tarefa 8', completed: false },
    { id: 9, desciption: 'Tarefa 9', completed: false },
    { id: 10, desciption: 'Tarefa 10', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id === id);
    return task
  }

  create(task: Task) {

  }

  update(task: Task) {

  }

  delete(id: number) {

  }
}
