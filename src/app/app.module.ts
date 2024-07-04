import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCardComponent } from './pages/page-card/page-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DecompteComponent } from './components/decompte/decompte.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCardComponent,
    DecompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
