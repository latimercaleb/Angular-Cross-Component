import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  // The @Input decorator is required for exposing the property to global code, component members are natively private unless purposefully exposed
  // The value in the () is an alias for how it is addressed outside of this component. Now element cannot be used outside
  @Input('server') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
