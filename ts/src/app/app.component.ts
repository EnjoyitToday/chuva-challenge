import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthorsService } from './services/authors.service';
import { UniversityService } from './services/university.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  constructor(
    public userService:UserService,
    public authorsService:AuthorsService,
    public universityService:UniversityService
  ){}

}
