import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'chuva-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {

  constructor(
    public authorsService:AuthorsService,
    public universityService:UniversityService
  ) { }

  ngOnInit(): void {
  }

}
