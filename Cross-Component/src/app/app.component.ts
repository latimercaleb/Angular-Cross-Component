import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServerContent: any;
  serverList = [
    {
      type:'server',
      name: 'foo',
      content: 'Simple data struct'
    }
  ];
  onServerAdded(serverData: {name: string, content: string}) {
    this.serverList.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {name: string, content: string}) {
    this.serverList.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
