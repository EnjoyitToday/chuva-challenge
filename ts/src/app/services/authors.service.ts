import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  public authors = [
    {
      name:'Galileo Galilei',
      indicator:'¹'
    },
    {
      name:'Berta Lange de Morretes',
      indicator:'²'
    },
    {
      name:'Isaac Newton',
      indicator:'³'
    },
    {
      name:'Cesar Lattes',
      indicator:'¹'
    },
    {
      name:'Stephen Hawking',
      indicator:'⁴'
    }
  ]

  constructor() { }
}
