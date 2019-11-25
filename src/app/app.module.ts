import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderImgComponent } from './components/header-img/header-img.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoBlockComponent,
    HeaderImgComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
