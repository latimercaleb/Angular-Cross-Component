import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {
      data :string[] = [
            'Midoria',
            'Ochaco',
            'Bakugo',
            'Tsu'
      ]
  constructor() {
        console.log('Constructor called');
 }

  ngOnInit() {
        console.log('ngOnInit called');
  }

}
