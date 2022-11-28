import { Component, OnInit } from '@angular/core';
import { SubmittedData } from 'src/app/modals/interfaces';
import { AppService } from 'src/app/app.service';
import { NavController } from '@ionic/angular';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userdata={} as SubmittedData;


  registerForm = new FormGroup(
    {
     name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required)

      
    }
  )












  constructor(
    private afs:AppService,
    private nav:NavController,
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
