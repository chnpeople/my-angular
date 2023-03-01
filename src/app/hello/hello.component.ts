import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name:string = '自定义属性'
  isMax:boolean = true
  arr:Array<number> = [1,2,3,4,5]
  constructor() { }

  ngOnInit() {
  }
  clickMe(item) {
    console.log('点击了' + item);
    
  }
}
