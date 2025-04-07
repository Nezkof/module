import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePage],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [HomePage],
})
export class AppModule {}
