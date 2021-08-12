import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { NewsService } from '../news.service';
import { from, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


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

  testThrottleValue: string = '';

  inputChange$ = new Subject()


  constructor(private newsService: NewsService) {}

  ngOnInit() {
    console.log('ngOnInit')
    this.newsService.load(0, 3)
      .subscribe(nextNews => {
        console.log(nextNews)
      });
    // this.fetchData()
    this.unsubscribe1()
    this.inputChange$.pipe(debounceTime(1000))
        .subscribe(() => {
          console.log(this.testThrottleValue)
        })
  }

  fetchData() {
    // Create an Observable out of a promise
    const data = from(fetch('assets/data/news.json'));
    // Subscribe to begin listening for async result
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }

  unsubscribe1() {
    const observable = from([10, 20, 30]);
    const subscription = observable.subscribe(x => console.log(x));
    // Later:
    subscription.unsubscribe();
  }

  handleInputChange() {
    console.log(this.testThrottleValue)
  }



}
