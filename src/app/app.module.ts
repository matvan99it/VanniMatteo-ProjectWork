import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ElencoContenutiPage } from '../pages/elenco-contenuti/elenco-contenuti';
import { DettagliContenutiPage } from '../pages/dettagli-contenuti/dettagli-contenuti';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElencoContenutiPage,
    DettagliContenutiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ElencoContenutiPage,
    DettagliContenutiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
