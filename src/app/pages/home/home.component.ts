import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private router:Router){}
  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.from("#hero-title", { duration: 1, y: -100, opacity: 0, ease: "bounce" })
      .from("#hero-sub", { duration: 1, y: 50, opacity: 0 }, "-=0.3")
      .from("#cta-btn", { duration: 1, scale: 0, ease: "elastic" }, "-=0.2");
  }

  navigatetomap(){
    this.router.navigate(['home/map'])
  }
}
