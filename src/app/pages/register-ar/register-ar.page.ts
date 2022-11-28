import { Component, OnInit } from '@angular/core';
import { SubmittedData } from 'src/app/modals/interfaces';
import { AppService } from 'src/app/app.service';
import { NavController } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-ar',
  templateUrl: './register-ar.page.html',
  styleUrls: ['./register-ar.page.scss'],

})
export class RegisterArPage implements OnInit {
userdata ={} as SubmittedData;
  constructor(
    private afs:AppService ,
    private nav :NavController
  ) { }

  ngOnInit() {
  }
  submitInfo()
  {
this.afs.submitData(this.userdata)
  }
  goHome()
{
  this.nav.navigateForward('/home')

}


}
