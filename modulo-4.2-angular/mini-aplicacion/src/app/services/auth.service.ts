import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    let savedUsername = '';
    let savedIsLogged = 'false';

    if (typeof window !== 'undefined' && window.localStorage) {
      savedUsername = localStorage.getItem('username') || '';
      savedIsLogged = localStorage.getItem('isLogged') || 'false';
    }
    if (savedUsername && savedIsLogged === 'true') {
      this.isLoggedSubject.next(true);
      this.usernameSubject.next(savedUsername);
    }
  }
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string>('');

  public isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();
  public username$: Observable<string> = this.usernameSubject.asObservable();

  login(credentials: { username: string; password: string }): boolean {
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      this.isLoggedSubject.next(true);
      this.usernameSubject.next(credentials.username);
      localStorage.setItem('username', credentials.username);
      localStorage.setItem('isLogged', 'true');
      return true;
    }

    return false;
  }

  logout(): void {
    this.isLoggedSubject.next(false);
    this.usernameSubject.next('');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
  }

  isLogged(): boolean {
    return this.isLoggedSubject.value;
  }

  getUsername(): string {
    return this.usernameSubject.value;
  }
  ngOnDestroy(): void {
    this.isLoggedSubject.complete();
    this.usernameSubject.complete();
  }
}