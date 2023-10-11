import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion.component';



@NgModule({
  declarations: [
    DiscussionComponent
  ],
  exports: [
    DiscussionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiscussionModule { }
