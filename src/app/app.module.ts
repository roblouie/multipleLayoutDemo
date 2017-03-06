import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/tabs/about/about';
import { ContactPage } from '../pages/tabs/contact/contact';
import { HomePage } from '../pages/tabs/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BasePage } from "../pages/base/base.component";
import { BackToBaseComponent } from "./back-to-base.component";
import { MenuComponent } from "../pages/menu/menu.component";
import { Page1 } from "../pages/menu/page1/page1";
import { Page2 } from "../pages/menu/page2/page2";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BasePage,
    BackToBaseComponent,
    MenuComponent,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BasePage,
    MenuComponent,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
