import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router){}
  navigateToAboutus(){
    this.router.navigate(['home/aboutus'])
  }
  navigateToMap(){
    this.router.navigate(['home/map'])
  }
  navigateToHome(){
    this.router.navigate(['home/welcomePage'])
  }
}
