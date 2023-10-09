import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chuva-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public buttons = ["Apresentação","Comitês","Autores","Eixos temáticos","Trabalhos","Contato"]


  constructor() { }

  ngOnInit(): void {
  }



}
