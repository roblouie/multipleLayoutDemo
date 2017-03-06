import { Component } from '@angular/core';
import { BasePage } from "../pages/base/base.component";
import { App } from "ionic-angular";


@Component({
  selector: 'mld-back-to-base',
  template: '<button style="float: right; margin: 0;" small ion-button (click)="backToBase()">Back to Base</button>'
})
export class BackToBaseComponent {
  rootPage = BasePage;

  constructor(private app: App) {}

  backToBase() {
    this.app.getRootNav().setRoot(BasePage);
  }
}
