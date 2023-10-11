import { Component } from '@angular/core';
import { AuthorsService } from './services/authors.service';
import { UniversityService } from './services/university.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  constructor(){}

}
