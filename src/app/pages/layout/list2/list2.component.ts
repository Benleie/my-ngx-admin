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

  colorVisible:boolean = false;

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

  ngAfterContentInit() {
    debugger;
  }

  ngAfterContentChecked() {
    // debugger;
  }

  ngAfterViewInit() {
    debugger;
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

  fetchList() {
    const data = {
      pageSize: 10,
      'pageNum': 1,
      "sortField": "",
      "order": "",
      "taskId": "298"
    }
    const url = 'http://10.7.192.120:8196/hunt/clueManage/cluePushList'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => console.log(data))
  }

  toggleColor() {
    this.colorVisible = !this.colorVisible;
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
