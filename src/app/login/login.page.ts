import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,
              private alertController: AlertController, private toastController: ToastController) { }
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginForm.controls; }
  async presentAlert(errorMessage) {
    const alert = await this.alertController.create({
      header: 'Oops!',
      message: errorMessage,
      buttons: ['OK']
    });
    await alert.present();
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.value.password === '1234' && this.loginForm.value.email === 'bhavya@gmail.com') {
      this.router.navigate(['/', 'home']);
    } else {
      this.presentAlert('please check your details');
    }
  }
}
