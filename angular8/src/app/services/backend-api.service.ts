import { Injectable } from '@angular/core';
import { Pociones } from '../models/pociones';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  /**
   * variable que establece la cantidad de posciones unicas y cuantas se debe tomas y el daño que se hará en base a la poscion tomada
   */

  reglas = [
    { posionesUnicas: 5, tomar: 5, dano: 25 },
    { posionesUnicas: 4, tomar: 4, dano: 20 },
    { posionesUnicas: 3, tomar: 3, dano: 10 },
    { posionesUnicas: 2, tomar: 1, dano: 3 },
    { posionesUnicas: 1, tomar: 1, dano: 3 },
  ]
  /**
   * Variable que ayuda a recorrer de manera dinamica los atributos del modelo Pociones
   */
  colores = ["rojas", "azules", "verdes", "amarillas", "gris"]
  constructor() {

  }


  buscarRespuesta(pociones: Pociones) {

    let iteraciones=[]
    //crea una lista de posiones que tendra cada ataque
    
    let contador =0
    
    while (contador<3) {
      this.calcularAtaque(iteraciones,pociones);
      contador++
    }
    let indexMejor=0
    for (let index = 1; index < iteraciones.length; index++) {
      if(iteraciones[index].dano>iteraciones[index-1].dano)
        indexMejor=index      
    }
    console.log(iteraciones[indexMejor]);
    
    
    return iteraciones[indexMejor]


  }
  calcularAtaque(iteraciones:any[],pociones){
    let posionesAux=new Pociones();
    posionesAux.rojas=pociones.rojas
    posionesAux.verdes=pociones.verdes
    posionesAux.amarillas=pociones.amarillas
    posionesAux.azules=pociones.azules
    posionesAux.gris=pociones.gris
    let ataques: Pociones[] = []
    let dano = 0
    while (posionesAux.total() > 0) {
      let pocionUsada = new Pociones();
      let unicas=0
      if(iteraciones.length==0)
        unicas= this.pocionesUnicas(posionesAux)
      else{
        let tmp=iteraciones[iteraciones.length-1].ataques[0].total()-1
        unicas=tmp>posionesAux.total()?posionesAux.total():tmp
      }
        
      let cantidadRestarUnica = this.reglas.find(x => x.posionesUnicas == unicas)
      this.restarUnaUnica(posionesAux, cantidadRestarUnica.tomar, pocionUsada);
      ataques.push(pocionUsada)
      dano += cantidadRestarUnica.dano
    }
    iteraciones.push({ataques: ataques, dano: dano})
  }

  /**
   * 
   * @param pociones :cantidad de posiones disponible en este momento
   * El siguiente metodo calcula cuantas pociones únicas se tiene actualmente
   */
  pocionesUnicas(pociones) {
    let pocionesAux = Object.assign({}, pociones)
    let unicas = 0

    this.colores.forEach(color => {
      if (pocionesAux[color] > 0)
        unicas++
    });
    return unicas
  }
  /**
   * 
   * @param pocionesAux :cantidad de pociones disponible en este momento
   * @param total  :total de posiones unicas a restar 
   * @param registroUso : variable que almacena el ataque actual
   */
  restarUnaUnica(pocionesAux, total, registroUso) {
    this.colores.forEach(color => {
      if (pocionesAux[color] > 0 && total > 0) {
        pocionesAux[color] = pocionesAux[color] - 1;
        registroUso[color] = 1
        total--;
      }

    });
  }


  combinacionesUnicas(pociones) {
   

  }
}
