import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickRegisterPage } from './quick-register';

@NgModule({
  declarations: [
    QuickRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickRegisterPage),
  ],
})
export class QuickRegisterPageModule {}
