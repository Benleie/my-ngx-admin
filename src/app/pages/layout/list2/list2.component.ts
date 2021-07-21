import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { NewsService } from '../news.service';

@Component({
  selector: 'ngx-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
})
export class List2Component implements OnInit {
  fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  constructor(private newsService: NewsService) {}
  ngOnInit() {
    console.log('ngOnInit')
    this.newsService.load(0, 3)
      .subscribe(nextNews => {
        console.log(nextNews)
      });
  }

}
