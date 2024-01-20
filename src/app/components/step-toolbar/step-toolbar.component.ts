import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-toolbar',
  templateUrl: './step-toolbar.component.html',
  styleUrls: ['./step-toolbar.component.scss'],
})
export class StepToolbarComponent {

  /**
   * @param: string;
   */
  @Input() title = 'title';

  /**
   * @param: any[];
   */
  @Input() lenght = [1,2,3];

  /**
   * @param: number[];
   */
  @Input() selectedStep = [0,1];

}
