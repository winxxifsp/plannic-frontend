import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent implements OnInit {

  constructor() { }

  pNome:String;
  sNome:String;
  email:String;
  senha:String;
  confsenha:String;
  ngOnInit() {
    document.getElementById("body").classList.add("bg-gradient-primary");
  }

  registrar(){
    if(this.confsenha === this.senha){
      let infos = {
        nome: this.pNome +" "+this.sNome,
        email: this.email,
        senha: this.senha,
      }
      console.log(infos)
    }
  }

}