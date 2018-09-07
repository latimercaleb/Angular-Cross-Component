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


/*
      ngOnInit is a lifecycle hook
      Lifecycle hooks are triggered on every component as a component is instantiated or removed they are the following:
      - ngOnChanges: Executed anytime an @input changes and on generation
      - ngOnInit: Executed once it's been initialized
      - ngDoCheck: Runs often, whenever change detection runs which is when the template or component changes before the re-render. It runs on every change
      - ngAfterContentInit: Runs after ng-content has been initialized with data
      - ngAfterContentChecked: Runs after change detection is complete
      - ngAfterViewInit: Called after component view has been initialized
      - ngAfterViewChecked: Called after component view has been checked
      - ngOnDestroy: Call on component destruction
*/
  ngOnInit(){

 }
}
