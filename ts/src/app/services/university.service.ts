import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  public universities = [
    {
      name:'Universidade Estadual de Campinas ',
      indicator:'¹'
    },
    {
      name:'Universidade de São Paulo ',
      indicator:'²'
    },
    {
      name:'Instituto Nacional de Pesquisas Espaciais ',
      indicator:'³'
    },
    {
      name:'Universidade Federal do Rio de Janeiro',
      indicator:'⁴'
    }
  ]

  constructor() { }

}
