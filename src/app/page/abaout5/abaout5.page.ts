import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout5',
  templateUrl: './abaout5.page.html',
  styleUrls: ['./abaout5.page.scss'],
})
export class Abaout5Page implements OnInit {

  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        nombre:'Asking Alexandria tiene sus orígenes en Dubái en el año 2003, donde el guitarrista Ben Bruce formó una banda llamada Amongst Us. A medida que la banda comenzó a madurar, algunos miembros no tardaron en dejar Dubái y los cambios comenzaron a producirse. Bruce declaró en una entrevista con Gulf News que era ridículamente difícil mantener a la banda porque la gente iba y venia de Dubái. Con los nuevos miembros su nombre cambió a End of Reason.',
        foto:'https://i0.wp.com/www.braintocrush.com/wp-content/uploads/2013/02/AskingAlexandria620-620x400.jpg?resize=620%2C400',
        
      },
     
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }
}
