import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout2',
  templateUrl: './abaout2.page.html',
  styleUrls: ['./abaout2.page.scss'],
})
export class Abaout2Page implements OnInit {

  
  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        nombre:'Banda británica de heavy metal, una de las más destacadas de los ochenta, liderada por Steve Harris (1957). Creada en 1975 por el propio Steve Harris y por el guitarrista Dave Murray en el barrio obrero londinense de East End, fue bautizada con el nombre de un instrumento de tortura de la Edad Media (Iron Maden, que significa Dama de hierro). ',
        foto:'https://updatemexico.com/wp-content/uploads/2021/01/iron-maiden-killers-album-cover-banner-1.jpg',
        
      },
     
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }

}
