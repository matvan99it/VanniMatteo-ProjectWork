import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WpApiProvider } from '../providers/wp-api/wp-api'
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  constructor( public platform: Platform, 
               public statusBar: StatusBar, 
               public splashScreen: SplashScreen,
               public api: WpApiProvider ){
      this.initializeApp();
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.api.getCategories();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.api.getPages();
      this.api.getPosts();
    });
  }

  openPage(cat_id: number=0)
  {
    this.nav.setRoot(HomePage, {cat_id: cat_id});
  }
  openPage2(cat_id: number=0)
  {
    this.nav.setRoot(HomePage, {cat_id: cat_id});
  }
  openPage3(cat_id: number=0)
  {
    this.nav.setRoot(HomePage, {cat_id: cat_id});
  }
}

