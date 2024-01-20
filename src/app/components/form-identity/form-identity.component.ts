import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IDocumentTypes } from 'src/app/interfaces/documentTypes.interfaces';
import { IGenders, genders } from 'src/app/interfaces/genders.interfaces';
import { DocumentTypesService } from 'src/app/services/document-types.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form-identity',
  templateUrl: './form-identity.component.html',
  styleUrls: ['./form-identity.component.scss'],
})
export class FormIdentityComponent implements OnInit {

  @Output() formGralSuccess = new EventEmitter<any>();

  formDataGral!: FormGroup;
  documentTypes!: IDocumentTypes[];
  genders!: IGenders[];
  showPass = 'password';

  constructor(
    private documentTypesService: DocumentTypesService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
  ) {
    this.getDocumentTypes();
  }

  ngOnInit() {
    this.builderForm();
  }

  onSubmit() {
    if (this.formDataGral.valid) {
      this.formGralSuccess.emit(this.formDataGral.value);
    }
  }

  private getDocumentTypes() {
    this.documentTypesService.byActives().subscribe({
      next: (resp) => {
        setTimeout(() => {
          this.documentTypes = resp;
          this.genders = genders;
        }, 300);
      }, error: () => {
        this.toastService.presentToast('Error de servicios');
      }
    })
  }

  fieldsMatcherValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (!control || !matchingControl) return null;
      if (matchingControl.errors && !matchingControl.errors['fieldsMismatch']) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ fieldsMismatch: true });
      } else {
        matchingControl.setErrors(null);
      }

      return null;
    };
  }

  showPassword() {
    this.showPass = this.showPass === 'password' ? 'text' : 'password';
  }

  private builderForm() {
    this.formDataGral = this.formBuilder.group({
      docType: ['', [Validators.required]],
      docNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      docDate: ['', [Validators.required] ],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      emailConfirm: ['', [Validators.required]],
      pin: ['', [Validators.minLength(4), Validators.maxLength(4)]],
      pinConfirm: ['', [Validators.minLength(4), Validators.maxLength(4)]],
    }, { validators: [
      this.fieldsMatcherValidator('email', 'emailConfirm'),
      this.fieldsMatcherValidator('pin', 'pinConfirm')
    ] })
  }

}
