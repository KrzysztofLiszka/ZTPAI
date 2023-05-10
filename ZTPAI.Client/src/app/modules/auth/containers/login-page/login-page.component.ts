import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.getInitializedFormGroup();
  }

  private getInitializedFormGroup(): any {
    return this.formBuilder.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login(): void {
    this.authService.loginToSystem(this.form.value).subscribe(response => {
      localStorage.setItem('tokenZTPAI', response.token);
      this.authService.updateLoggedIn(true);
      this.router.navigateByUrl('/');
    });
  }
}
