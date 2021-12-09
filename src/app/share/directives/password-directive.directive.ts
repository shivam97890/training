import { Directive, ElementRef, HostListener } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[password-validator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordDirectiveDirective, multi: true }]
})

export class PasswordDirectiveDirective implements Validator {

  formController: AbstractControl | undefined;

  @HostListener('focusout', ['$event.target'])
  onClick() {
    this.validatePassword(this.formController)
  }
  constructor(private el: ElementRef) { }

  validate(c: AbstractControl): any {
    this.formController = c;
    this.validatePassword(this.formController)
    return null
  }

  validatePassword(c: AbstractControl | undefined): void {
    if (document.getElementById('errorMessage')) {
      let x = document.getElementById('errorMessage');
      x?.remove();
    }
    let a = document.createElement('div');
    a.setAttribute('id', 'errorMessage');
    a.innerHTML = `<span style="color:red">${identityRevealedValidator(c)}</span>`;
    console.log(c?.dirty, c?.touched, c?.value, c)

    if ((c?.dirty || c?.touched) && !c?.value) {
      a.innerHTML = `<span style="color:red">Password is required</span>`;
      this.el.nativeElement.parentNode.appendChild(a);
    }
    if (c?.value && identityRevealedValidator(c)) {
      this.el.nativeElement.parentNode.appendChild(a);
    }
  }

}


export const identityRevealedValidator: any = (control: AbstractControl): string | undefined => {

  let message: string | undefined = "Password should contain at least";

  if (!/(?=.{8,})/.test(control.value)) {

    message = message + ' 8 characters long'
  }
  if (!/(?=.*[A-Z])/.test(control.value)) {

    message = message + ' one uppercase letter'
  }
  if (!/(?=.*[a-z])/.test(control.value)) {

    message = message + ' one lowercase letter'
  }
  if (!/(?=.*[0-9])/.test(control.value)) {

    message = message + ' one digit'
  }
  if (!/([^A-Za-z0-9])/.test(control.value)) {

    message = message + ' one special character'
  }

  if (/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(control.value)) {
    message = undefined
  }

  return message
};