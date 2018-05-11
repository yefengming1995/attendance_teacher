import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LocalStorageProvider} from "../providers/local-storage/local-storage";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = LoginPage;

  pages:Array<{title:string,component:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private  storage:LocalStorageProvider) {
    this.initializeApp();

    this.pages=[
      {title:'Home',component:HomePage}
    ];
    let app=this.storage.get('App',{
      isRun:false,
      version:'1.0.0'
    });
    if(app.isRun==false){
      app.isRun=true;
      this.storage.set('App',app);
      this.rootPage=LoginPage;
    }
    else{
      this.rootPage=HomePage;
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

