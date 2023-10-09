import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userLogged={
    name:'Alguém',
    email:'alguem12@galoascience.com',
    photo:'/assets/profile.svg',
    notifications:2
  }

  constructor() { }
}
