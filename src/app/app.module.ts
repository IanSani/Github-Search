import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { MasterComponent } from './master/master.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    StrikethroughDirective,
    DateCountPipe,
    MasterComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
