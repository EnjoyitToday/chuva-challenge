import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiscussionComponent
  ],
  exports: [
    DiscussionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DiscussionModule { }
