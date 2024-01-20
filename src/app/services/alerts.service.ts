import { Injectable } from '@angular/core';
import { AlertController, IonicSafeString, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private alertController: AlertController
  ) { }

  async registerSuccess() {
    const templateMsg =
      `
        <img class="alert-img" src="assets/alerts/marrano_regalo.svg" alt="marrano regalo"/>
        <h4 class="title-alert">¡Bienvenido a Coink!</h4>
        <spa class="msg-alert">¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!</spa>
      `;
    const alert = await this.alertController.create({
      mode: 'ios',
      animated: true,
      backdropDismiss: true,
      message: templateMsg,
      buttons: [
        {
          text: 'CONTINUAR',
          role: 'cancel',
          cssClass: 'btn-alert',
          htmlAttributes: {
            'aria-label': 'alert-close',
          },
        },
      ],
    });
    await alert.present();
  }
}
