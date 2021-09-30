import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout1',
  templateUrl: './abaout1.page.html',
  styleUrls: ['./abaout1.page.scss'],
})
export class Abaout1Page implements OnInit {

  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        user :'Sin nombre',
        nombre:'Jose perez Leon',
        foto:'https://media.gettyimages.com/videos/keep-that-game-face-on-video-id1147691055?s=640x640'
      }, {
        user :'Pablo',
        nombre:'Pablo Escobar',
        foto:'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EL4BGOSECFBUHKIEVLBMAZJS4M.jpg'
      }, {

        user :'El de las drogas',
        nombre:'Kevin Jesus',
        foto:'https://reddigital.cl/wp-content/uploads/2015/10/jamaica_oroverde.jpg'
      }, {
        user :'Mi crush',
        nombre:'Isela Guadalupe',
        foto:'https://i.pinimg.com/236x/f7/15/19/f71519427081f66d9e192edab65e5ee8.jpg'
      }, {
        user :'Ivan',
        nombre:'Mariano Ivan',
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUrfNVJ5MBW-kAdfEs4c9LeVMUJVoNhK9wg&usqp=CAU'
      }, 
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }

}
