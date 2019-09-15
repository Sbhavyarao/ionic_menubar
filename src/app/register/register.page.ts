import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,
              private alertController: AlertController, private toastController: ToastController) { }
  registerForm: FormGroup;
  submitted = false;
  errorMessage = '';
  toast: any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.registerForm.controls; }
  async presentAlert(errorMessage) {
    const alert = await this.alertController.create({
      header: 'Oops!',
      message: errorMessage,
      buttons: ['OK']
    });
    await alert.present();
  }

  presentToast() {
    this.toast = this.toastController.create({
      message: 'Registered successfully',
      duration: 2000,
      position: 'bottom',
      color: 'light'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.toast = this.toastController.dismiss();
  }
  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.presentToast();
      this.router.navigate(['/', 'login']);
    }
  }
}
