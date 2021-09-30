import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  page1(){
    this.router.navigate(['/abaout1']);
  }
  page2(){
    this.router.navigate(['/abaout2']);
  }
  page3(){
    this.router.navigate(['/abaout3']);
  }
  page4(){
    this.router.navigate(['/abaout4']);
  }
  page5(){
    this.router.navigate(['/abaout5']);
  }
  page6(){
    this.router.navigate(['/abaout6']);
  }
}
