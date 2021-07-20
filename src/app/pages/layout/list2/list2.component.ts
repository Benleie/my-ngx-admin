import { Component } from '@angular/core';
import { fruits } from './fruits-list';

@Component({
  selector: 'ngx-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
})
export class List2Component {
  fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

}
