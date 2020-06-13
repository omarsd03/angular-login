import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((resp: any) => {
      console.log(resp);
      this.tasks = resp;
    }, err => console.log(err));
  }

}
