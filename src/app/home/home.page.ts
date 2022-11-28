import { Component } from '@angular/core';
import { SubmittedData } from '../modals/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private nav:NavController
  ) {}
goRegister()
{
  this.nav.navigateForward('/register')
}
goHomeArabic()
{
  this.nav.navigateForward('/register-ar')
}


}
