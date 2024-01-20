import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { StepToolbarComponent } from "./step-toolbar/step-toolbar.component";
import { NoteComponent } from "./note/note.component";
import { NumberKeyboardComponent } from "./number-keyboard/number-keyboard.component";
import { FormIdentityComponent } from "./form-identity/form-identity.component";
import { FormContractComponent } from "./form-contract/form-contract.component";

const components = [
  StepToolbarComponent,
  NoteComponent,
  NumberKeyboardComponent,
  FormIdentityComponent,
  FormContractComponent,
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    components
  ],
  exports: components,
  providers: [],
})
export class ComponentsModule { }
