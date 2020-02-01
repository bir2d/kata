import { TestBed } from '@angular/core/testing';

import { BackendApiService } from './backend-api.service';
import { Pociones } from '../models/pociones';

describe('BackendApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendApiService = TestBed.get(BackendApiService);
    expect(service).toBeTruthy();
  });


  it('deberia dañar 13%, 1 ataque', () => {
    const service: BackendApiService = TestBed.get(BackendApiService);
    
    const pociones= new Pociones()
    pociones.rojas=2;
    pociones.azules=1;
    pociones.verdes=1;
    pociones.amarillas=0;
    pociones.gris=0;
    const response =service.buscarRespuesta(pociones)
    expect(response.ataques.length).toEqual(2);
    expect(response.dano).toEqual(13);
  });

  it('deberia dañar 31, 3 ataques', () => {
    const service: BackendApiService = TestBed.get(BackendApiService);
    
    const pociones= new Pociones()
    pociones.rojas=2;
    pociones.azules=2;
    pociones.verdes=1;
    pociones.amarillas=1;
    pociones.gris=1;
    const response =service.buscarRespuesta(pociones)
    expect(response.ataques.length).toEqual(3);
    expect(response.dano).toEqual(31);
  });
  

});
