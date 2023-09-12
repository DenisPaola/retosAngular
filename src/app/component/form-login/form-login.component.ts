import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  user = {
    email: '',
    password: ''
  }

  onSubmit() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor.
    console.log('Datos de inicio de sesión enviados:');
    console.log('Email: ' + this.user.email);
    console.log('Password: ' + this.user.password);  }
}
