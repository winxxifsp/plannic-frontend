import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { TokenStorageService } from 'src/app/service/token.storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: LoginService, private tokenStorage: TokenStorageService,  private router:Router) { }
  email: String;
  senha: String;

  ngOnInit(): void {
    document.getElementById("body").classList.add("bg-gradient-primary");

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['']);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }



  login() {
    let infos = {
      email: this.email,
      senha: this.senha
    }
    console.log(infos)
  }

  reloadPage(): void {
    window.location.reload();
  }
}