import { Component } from '@angular/core';
import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-login-entry',
  templateUrl: './entry.component.html',
  styles: [
    `
      .login-app {
        width: 40vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';

  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
