import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {MenuComponent} from "../menu/menu.component";

@Component({
  templateUrl: 'base.html'
})
export class BasePage {

  constructor(public navCtrl: NavController) {

  }

  openTabs() {
    this.navCtrl.push(TabsPage);
  }

  openMenu() {
    this.navCtrl.push(MenuComponent);
  }

}
