import { Component, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges {
      data :string[] = [
            'Midoria',
            'Ochaco',
            'Bakugo',
            'Tsu'
      ]
  constructor() {
        console.log('Constructor called');
 }

ngOnChanges(){
      console.log('On changes called');
}
  ngOnInit() {
        console.log('ngOnInit called');
  }

}
