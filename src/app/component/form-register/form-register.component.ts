import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  registerForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors(null);
    } else {
      formGroup.get('confirmPassword')?.setErrors({ passwrodNoIgual: true });
    }
  }

  onSubmit() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor.
    console.log('Datos de registro enviados:', this.registerForm.value);
  }
}
