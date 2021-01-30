import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: String;
  senha: String;
  ngOnInit() {
    document.getElementById("body").classList.add("bg-gradient-primary");
  }
  login() {
    let infos = {
      email: this.email,
      senha: this.senha
    }
    console.log(infos)
  }

}