import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  /**
   * @description Validator for password.
   *   
   * @returns An error map that contains one of the properties listed below or null if it is valid:
   * - minLength  : at least 10 characters
   * - lowerCase  : at least one lowercase character
   * - upperCase  : at least one uppercase character
   * - digit      : at least one digit
   * - specialChar: at least one special character (!@#$%&*)
   */
  static password(control: AbstractControl<string>): ValidationErrors | null {
    const value = control.value
    const minLength = 10;
    const lowerCaseRegex = /^(?=.*[a-z])/;
    const upperCaseRegex = /^(?=.*[A-Z])/;
    const digitRegex = /^(?=.*\d)/;
    const specialCharRegex = /^(?=.*[!@#$%&*])/;

    const validationErrors: ValidationErrors = {};
    if (!value) {
      return null;
    }
    if (value.length < minLength) {
      validationErrors["minLength"] = { minLength: minLength, actual: value.length }
    }
    if (!lowerCaseRegex.test(value)) {
      validationErrors["lowerCase"] = { lowerCase: false }
    }
    if (!upperCaseRegex.test(value)) {
      validationErrors["upperCase"] = { upperCase: false }
    }
    if (!digitRegex.test(value)) {
      validationErrors["digit"] = { digit: false }
    }
    if (!specialCharRegex.test(value)) {
      validationErrors["specialChar"] = { specialChar: false }
    }

    return Object.is(validationErrors, {}) ? null : validationErrors;
  }

  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
    return isValid ? null : { childrenNotEqual: true };
  }
}

export class UserModel
{
  name: string;
  lastName: string;
  email: string;
  password: string;

  getFullName(): string {
    return this.name + this.lastName;
  }

  isValid(): boolean {
    return this.name.length > 0 && 
      this.lastName.length > 0 && 
      this.email.length > 0 && 
      this.password.length > 0;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  validAccounts: UserModel[];
  
  createAccount(user: UserModel): void {    
    if (!user.isValid()) {
      return;
    }
    
    this.validAccounts.push(user);
    // todo: login and go to home;
  }
}
