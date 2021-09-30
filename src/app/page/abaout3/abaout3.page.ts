import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout3',
  templateUrl: './abaout3.page.html',
  styleUrls: ['./abaout3.page.scss'],
})
export class Abaout3Page implements OnInit {

  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        nombre:'Banda estadounidense de Heavy Metal formada en 1981 en Los Ángeles alrededor de los daneses Lars Ulrich y James Hetfield. A ellos se unieron, al principio, Lloyd Grant y Ron McGovney, pronto sustituidos por el guitarrista Dave Mustaine y el bajista Cliff Burton, respectivamente. En 1982 Kirk Hammett ocupó el lugar de Mustaine; en 1986, la muerte de Cliff Burton en un accidente llevó al grupo a Jason Newsted, que sería sustituido quince años después por el bajista Robert Trujillo.',
        foto:'https://metal-addiction.cl/wp-content/uploads/2020/07/dhRVvtA-752x440.jpg',
        
      },
     
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }

}
