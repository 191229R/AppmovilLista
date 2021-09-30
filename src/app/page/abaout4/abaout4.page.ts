import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abaout4',
  templateUrl: './abaout4.page.html',
  styleUrls: ['./abaout4.page.scss'],
})
export class Abaout4Page implements OnInit {

  constructor(private router:Router) { }
  data = [];
  datosLlamados:any;
  ngOnInit() {
    this.listaDatos();
  }

  listaDatos(){
    this.data=[
      {
        nombre:'Grupo británico de pop rock, integrado originalmente por Syd Barret (Cambridge, Reino Unido, 1946), Nick Mason (Birmingham, id., 1945), Roger Waters (Cambridge, Reino Unido, 1944) y Richard Wright (Londres, 1945). El grupo pasó por dos etapas bien definidas, la primera con Roger Waters y Syd Barret como líderes creativos (papel que asumió el guitarrista David Gilmour cuando aquél fue expulsado por sus problemas con las drogas), y la segunda tras la marcha de Roger Waters.',
        foto:'https://los40es00.epimg.net/los40/imagenes/los40classic/2018/01/foto-pink-floyd.jpg',
        
      },
     
    ];
    this.datosLlamados = JSON.parse(JSON.stringify(this.data));
  }

  
  Regresar(){
    this.router.navigate(['/home']);
  }

}
