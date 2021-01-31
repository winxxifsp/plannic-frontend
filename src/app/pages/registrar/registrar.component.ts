import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  form: any = {
    nome:null,
    email: null,
    password: null
    };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  ngOnInit() {
    document.getElementById("body").classList.add("bg-gradient-primary");
  }

  onSubmit(): void {
    const { email,password,nome  } = this.form; 

    this.loginService.register( email, password,nome).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("Cadastro realizado com sucesso!")
        window.location.href = "../login"
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }



}