import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { Pociones } from './models/pociones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular8';
  pociones: Pociones = new Pociones()

  respuesta = { ataques: [], dano: 0 }
  diccionarioDano={
    "5":25,
    "4":20,
    "3":10,
    "2":5,
    "1":3,
  }
  constructor(private api: BackendApiService) {



  }


  ngOnInit(): void {
    this.pociones.rojas = 2;
    this.pociones.azules = 2;
    this.pociones.verdes = 2;
    this.pociones.amarillas = 1;
    this.pociones.gris = 1;
    this.api.buscarRespuesta(this.pociones);    
  }
  buscarRespuesta(){
    this.respuesta=this.api.buscarRespuesta(this.pociones);
  }


  
}
