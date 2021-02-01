import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  public isPortugues:boolean = true;

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  
   }

  ngOnInit() {
    document.getElementById("body").classList.remove("bg-gradient-primary");
  }
}