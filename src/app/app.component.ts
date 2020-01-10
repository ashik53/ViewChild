import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {HelloComponent} from './hello.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  //set the HelloComponent 'name input' to 'Angular'
  name ="Angular";
  //get reference of 'HelloComponent'
  @ViewChild(HelloComponent, {static:false}) hello: HelloComponent;

  //current template reference variable , it works with elementref
  @ViewChild('pRef', {static: false}) pRef: ElementRef;

  ngAfterViewInit(){
    //access the 'HelloComponent' variable
    console.log("hello ", this.hello.name);
    //again change the value
    this.name = "Ashik";
    //print again, webpage will show the value 
    console.log("hello ", this.hello.name)

    /* Now current we will access & modify the current HTML files dom by viewChild*/

    console.log("-------template reference area-----");
    this.pRef.nativeElement.innerHTML = "Dom updated....."

  }//
}//
