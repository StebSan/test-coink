import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showDataPhone: boolean = true;
  showFormDataGral: boolean = false;
  showContract: boolean = false;

  titleToolbar = 'NÚMERO CELULAR';
  messageNote = 'phone';
  phoneValue: string = '';
  confirmPhone: boolean = false;
  valueFormGral: any;
  selectedStep = [0];

  constructor(
    private navController: NavController,
    private dataService: DataService,
  ) { }

  ngOnInit() { }

  numberKeyValue(value: string) {
    this.phoneValue = value;
  }

  numberKeyConfirm(confirm: boolean) {
    this.confirmPhone = confirm;
    this.showDataPhone = false;
    this.showFormDataGral = true;
    this.titleToolbar = 'DATOS DE CUENTA';
    this.messageNote = 'data';
    this.selectedStep = [0,1];
  }

  handleFormGral(formValues: any) {
    this.valueFormGral = formValues;
    this.showDataPhone = false;
    this.showFormDataGral = false;
    this.showContract = true;
    this.titleToolbar = 'FINALIZAR';
    this.messageNote = 'police';
    this.selectedStep = [0,1,2];
  }

  handleFormContract(confirm: any) {
    const data = {
      phoneValue: this.phoneValue,
      valueForm: this.valueFormGral
    }
    this.dataService.setData(data)
    this.navController.navigateForward('/home', { replaceUrl: true });
  }

}
