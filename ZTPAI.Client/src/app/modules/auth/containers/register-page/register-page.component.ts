import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.getInitializedFormGroup();
  }

  private getInitializedFormGroup(): any {
    return this.formBuilder.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required]
    });
  }

  register(): void {
    this.authService.registerToTheSystem(this.form.value).subscribe(response => {
      this.router.navigateByUrl('/login');
    })
  }
}