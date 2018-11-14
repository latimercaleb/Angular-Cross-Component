import { Component, OnInit, Input, OnChanges, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,ViewChild,ElementRef, ContentChild} from '@angular/core';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  // The @Input decorator is required for exposing the property to global code, component members are natively private unless purposefully exposed
  // The value in the () is an alias for how it is addressed outside of this component. Now element cannot be used outside
  @Input('server') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') content :ElementRef;
  constructor() {
        // Constructor comes in before ngOnit
        console.log('Constructed')
  }

  ngOnChanges(changes: SimpleChanges){
        // OnChanges is the only hook that takes a param
       console.log('Changes', changes)
 }

  ngOnInit() {
         console.log('initialized');
         // At this point the viewchild has no data, because we can't access the template. The DOM hasn't rendered yet
         console.log(this.header.nativeElement.textContent)
          console.log('another initialized');
         console.log(this.content.nativeElement.textContent)
  }

  ngDoCheck(){
        console.log('checking')
 }
ngAfterContentInit(){
      console.log('post-content');
      // Content being passed by reference from another typsscript component is loaded in a different hook
      console.log(this.content.nativeElement.textContent)
}
ngAfterContentChecked(){
      console.log('post-contentChecked')
}
ngAfterViewInit(){
      console.log('View init')
      // At this point the template has access to the template
      console.log(this.header.nativeElement.textContent)
}
ngAfterViewChecked(){
      console.log('View checked')
}
ngOnDestroy(){
      console.log('Destroying component')
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
       All hooks have an interface which should be implemented to prevent bad naming
       When to use a hook over a callback or promise?
  */



}
