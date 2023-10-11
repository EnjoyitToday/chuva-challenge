import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { TopbarModule } from './topbar/topbar.module';
import { FooterModule } from './footer/footer.module';
import { VideoContainerModule } from './video-container/video-container.module';
import { ResumeModule } from './resume/resume.module';
import { DiscussionModule } from './discussion/discussion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    TopbarModule,
    FooterModule,
    VideoContainerModule,
    ResumeModule,
    DiscussionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
