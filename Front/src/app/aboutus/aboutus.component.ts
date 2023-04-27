import { Component } from '@angular/core';
import { Instructor } from './instructor';
import { Instructors } from './instructors';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
instructor: Instructor[]=Instructors

ngOnInit() {

}

constructor(){
      
}
}
