import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-control',
  templateUrl: './server-control.component.html',
  styleUrls: ['./server-control.component.css']
})
export class ServerControlComponent implements OnInit {
  serverElements = [];
  newServerName = '';
  newServerContent = '';
  // These new properties are events, that send values outside, they require the @Output and to emit the data
  // Just like inputs, outputs can have aliases as well
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCrated') blueprintCreated = new EventEmitter<{name: string, content: string}>();
  constructor() { }
  ngOnInit() {  }
  onAddServer(nameref: string, contentRef: string){
    this.serverCreated.emit({
      name: nameref,
      content: contentRef
    });
  }
  onAddBlueprint(nameref: string, contentRef: string){
    this.blueprintCreated.emit({
      name: nameref,
      content: contentRef
    });
   }
  }
