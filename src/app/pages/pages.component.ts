import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
declare var particlesJS: any;

@Component({
  selector: 'pages',
  styles: [],
  template: `


        <router-outlet></router-outlet>
    `
})
export class Pages implements OnInit {

  constructor() {
  }
  ngOnInit() {
    particlesJS.load('particles', 'assets/particles/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
