import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dataRegister: any;

  constructor(
    private alertsService: AlertsService,
    private dataService: DataService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataRegister = this.dataService.getData();
    if(this.dataRegister === undefined) {
      this.navController.navigateForward('/welcome', { replaceUrl: true });
      return
    }
    this.alertsService.registerSuccess();
  }

}
