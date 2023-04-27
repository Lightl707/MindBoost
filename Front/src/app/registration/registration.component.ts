import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}
  showSuccessMessage: boolean = false;

  onSubmit(): void {
    const newUser = new User(this.email, this.password);
    this.userService.registerUser(newUser);
    console.log('Name:', this.email);
  console.log('Lastname:', this.password);
  if (this.email && this.password) {
  
    this.showSuccessMessage = true;
  }
  }
}
