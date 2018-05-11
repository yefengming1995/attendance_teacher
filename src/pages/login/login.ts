import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {QuickRegisterPage} from "../quick-register/quick-register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string='';
  password:string='';
  HomePage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl:ToastController, private alertCtrl:AlertController,
              private storage:LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //点击登录按钮时调用
  login(){
    if(this.username == '') {
      this.alertMessages('用户名不能为空！');
    } else if(this.username == this.storage.get('phone', null) || this.username == this.storage.get('email', null)) {
      if(this.password == '') {
        this.alertMessages('请输入密码！');
      } else if(this.password == this.storage.get('password',null)) {
        //跳转至主页面
        this.navCtrl.push(this.HomePage);
      } else {
        this.alertMessages('密码错误！请重新输入');
      }
    } else {
      this.alertMessages('用户名不存在！');
    }
  }
  //点击注册按钮时调用
  toRegister(){
    this.navCtrl.push(RegisterPage);
  }
  //点击忘记密码时调用
  toForgetpassword(){
    //进入找回密码页面
    this.navCtrl.push(ForgetPasswordPage);
  }
  //点击快速注册时调用
  toQuickregister(){
    //进入快速注册页面
    this.navCtrl.push(QuickRegisterPage);
  }
  alertMessages(mess) {
    let alert=this.alertCtrl.create({
      title:'提示',
      message:mess,
      buttons:['确定']
    });
    alert.present();
  }
}


