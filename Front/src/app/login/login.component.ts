import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedInUser: User | null = null;

  constructor(private userService: UserService) {}
  showSuccessMessage: boolean = false;

  onSubmit(): void {
    this.loggedInUser = this.userService.loginUser(this.email, this.password);
    console.log('Name:', this.email);
  console.log('Lastname:', this.password);
  if (this.email && this.password) {
  
    this.showSuccessMessage = true;
  }
  }

}
