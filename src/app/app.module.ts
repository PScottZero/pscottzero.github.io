import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { InfoComponent, SanitizePipe } from './components/info/info.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { HeaderBackgroundComponent } from './components/header-background/header-background.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    InfoComponent,
    IconButtonComponent,
    HeaderBackgroundComponent,
    FooterComponent,
    SanitizePipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
