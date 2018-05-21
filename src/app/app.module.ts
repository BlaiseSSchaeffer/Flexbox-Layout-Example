import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SandCastleComponent } from './sand-castle/sand-castle.component';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    SandCastleComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
