import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
name:string = '';
last:string = '';
phonenumber:string = '';
que:string = '';

showSuccessMessage: boolean = false;

onSubmit() {
  console.log('Name:', this.name);
  console.log('Lastname:', this.last);
  console.log('Phonenumber:', this.phonenumber);
  console.log('Question:', this.que);
  if (this.name && this.last && this.phonenumber && this.que) {
  
    this.showSuccessMessage = true;
  }
}

  
}
