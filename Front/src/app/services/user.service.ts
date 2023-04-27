import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  registerUser(user: User): void {
    this.users.push(user);
  }

  loginUser(email: string, password: string): User | null {
    return (
      this.users.find((user) => user.email === email && user.password === password) ?? null
    );
  }
}