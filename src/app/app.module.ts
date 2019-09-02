import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
