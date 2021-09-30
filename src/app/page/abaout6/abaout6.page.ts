import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout6',
  templateUrl: './abaout6.page.html',
  styleUrls: ['./abaout6.page.scss'],
})
export class Abaout6Page implements OnInit {

  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        nombre:'surgido a finales de los años 60 en el Reino Unido, la influencia del grupo Led Zeppelin es incalculable en la historia del rock.Su música trasciende cualquier etiqueta, incorporando a su base hard rock y a sus textos de influencia mística o mitológica heterogéneos sonidos que tanto se inspiraron en el blues como en el folk británico o en el funk.',
        foto:'https://img.discogs.com/EWGwgPqJRq30zIUoNYtFEEfUBeo=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-12595627-1538276815-1759.jpeg.jpg',
        
      },
     
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }
}
