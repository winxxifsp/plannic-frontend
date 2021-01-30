import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("body").classList.remove("bg-gradient-primary");
  }

}