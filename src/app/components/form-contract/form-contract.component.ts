import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contract',
  templateUrl: './form-contract.component.html',
  styleUrls: ['./form-contract.component.scss'],
})
export class FormContractComponent implements OnInit {

  @Output() formContractSuccess = new EventEmitter<any>();

  formContract!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.builderForm();
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formContract.valid) {
      const estaActivo = this.formContract.get('confirm')?.value;
      if (estaActivo) {
        this.formContractSuccess.emit(this.formContract.value);
      }
    }
  }

  checkboxValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return control.value ? null : { 'required': true };
    };
  }

  private builderForm() {
    this.formContract = this.formBuilder.group({
      confirm: [false, this.checkboxValidator()],
    });
  }
}
