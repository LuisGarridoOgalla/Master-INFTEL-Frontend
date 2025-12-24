import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string>('');

  public isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();
  public username$: Observable<string> = this.usernameSubject.asObservable();

  login(credentials: { username: string; password: string }): boolean {
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      this.isLoggedSubject.next(true);
      this.usernameSubject.next(credentials.username);
      
      return true;
    }
    
    return false;
  }

  logout(): void {
    this.isLoggedSubject.next(false);
    this.usernameSubject.next('');
  }

  isLogged(): boolean {
    return this.isLoggedSubject.value;
  }

  getUsername(): string {
    return this.usernameSubject.value;
  }
}