import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks().subscribe((resp: any) => {
      console.log(resp);
      this.tasks = resp;
    }, err => console.log(err));
  }

}
