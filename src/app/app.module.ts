import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderImgComponent } from './components/header-img/header-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ProjectComponent,
    HeaderComponent,
    InfoBlockComponent,
    HeaderImgComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
