import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuState: boolean;
  mobileMenuClasses = 'mobilenavOn navbar navbar-dark bg-primary'

  constructor() { }

  ngOnInit() {
    this.ToggleMenu();
  }

  ToggleMenu() {
    this.menuState = ! this.menuState;
    if (this.menuState === true) {
      this.mobileMenuClasses = 'mobilenavOff navbar navbar-dark bg-primary';
    }
    else {
      this.mobileMenuClasses = 'mobilenavOn navbar navbar-dark bg-primary';
    }
  }

}
