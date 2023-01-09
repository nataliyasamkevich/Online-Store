import { Validatable } from '../base/base';

function autoBind(
  target: object,
  name: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };

  return newDescriptor;
}

function validate(validatableInput: Validatable): boolean {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (validatableInput.minLengthCharacters != null) {
    const minLengthCharactersValue = validatableInput.minLengthCharacters;
    isValid =
      isValid &&
      validatableInput.value
        .split(' ')
        .filter((value) => value !== '')
        .every((value) => value.length >= minLengthCharactersValue);
  }

  if (validatableInput.countWord != null) {
    isValid =
      isValid &&
      validatableInput.value
        .split(' ')
        .map((value) => value.trim())
        .filter((value) => value !== '').length >= validatableInput.countWord;
  }

  if (validatableInput.minLength != null) {
    isValid =
      isValid &&
      validatableInput.value.trim().length >= validatableInput.minLength;
  }

  if (validatableInput.regexp != null) {
    if (validatableInput)
      isValid = isValid && validatableInput.regexp.test(validatableInput.value);
  }

  if (validatableInput.maxValueMonth != null) {
    if (validatableInput)
      isValid =
        isValid &&
        Number(validatableInput.value.slice(0, 2)) <=
          validatableInput.maxValueMonth;
  }

  if (validatableInput.minValueYear != null) {
    if (validatableInput)
      isValid =
        isValid &&
        Number(validatableInput.value.slice(3, 5)) >=
          validatableInput.minValueYear;
  }

  return isValid;
}

export class ValidateProjectInput {
  formEl: HTMLFormElement;
  nameEl: HTMLInputElement;
  phoneNumberEl: HTMLInputElement;
  emailEl: HTMLInputElement;
  addressEl: HTMLTextAreaElement;
  cardNumberEl: HTMLInputElement;
  expirationDateEl: HTMLInputElement;
  cvvEl: HTMLInputElement;
  cardLogo: HTMLImageElement;
  errorMessage: HTMLDivElement;
  formGroupClose: HTMLDivElement;
  modal: HTMLDivElement;

  constructor() {
    this.formEl = <HTMLFormElement>document.querySelector('.form');
    this.nameEl = <HTMLInputElement>document.getElementById('name');
    this.phoneNumberEl = <HTMLInputElement>(
      document.getElementById('phoneNumber')
    );
    this.emailEl = <HTMLInputElement>document.getElementById('e-mail');
    this.addressEl = <HTMLTextAreaElement>document.getElementById('address');
    this.cardNumberEl = <HTMLInputElement>(
      document.getElementById('card-number')
    );
    this.expirationDateEl = <HTMLInputElement>(
      document.getElementById('expiration-date')
    );
    this.cvvEl = <HTMLInputElement>document.getElementById('cvv');
    this.cardLogo = <HTMLImageElement>document.querySelector('.card__logo');
    this.errorMessage = <HTMLDivElement>(
      document.querySelector('.error-message')
    );
    this.formGroupClose = <HTMLDivElement>(
      document.querySelector('.form-group__close')
    );
    this.modal = <HTMLDivElement>document.querySelector('.modal');

    this.configure();
    this.validateCardNumberField();
    this.validateExpirationDateField();
    this.validateCVVField();
    this.changeImageSrc();
    this.closeModal();
  }

  private configure(): void {
    this.formEl.addEventListener('submit', this.submitHandler);
  }

  private validateCardNumberField(): void {
    this.cardNumberEl.addEventListener('input', (event: InputEventInit) => {
      if (
        !/[0-9]/.test(this.cardNumberEl.value) ||
        this.cardNumberEl.value.length > 19
      ) {
        this.cardNumberEl.value = this.cardNumberEl.value.slice(
          0,
          this.cardNumberEl.value.length - 1
        );
      }

      if (this.cardNumberEl.value.match(/[^\0-9-]/)) {
        this.cardNumberEl.value = this.cardNumberEl.value.replace(
          /[^\0-9-]/,
          ''
        );
      }

      if (
        event.inputType === 'deleteContentBackward' &&
        /[0-9]{4}/.test(this.cardNumberEl.value.slice(-4))
      ) {
        this.cardNumberEl.value = this.cardNumberEl.value.slice(
          0,
          this.cardNumberEl.value.length - 1
        );
      }

      if (
        /[0-9]{4}/.test(this.cardNumberEl.value.slice(-4)) &&
        this.cardNumberEl.value.length < 19
      ) {
        this.cardNumberEl.value += ' ';
      }
    });
  }

  private validateExpirationDateField(): void {
    this.expirationDateEl.addEventListener('input', (event: InputEventInit) => {
      if (
        !/[0-9]/.test(this.expirationDateEl.value) ||
        this.expirationDateEl.value.length > 5
      ) {
        this.expirationDateEl.value = this.expirationDateEl.value.slice(
          0,
          this.expirationDateEl.value.length - 1
        );
      }

      if (this.expirationDateEl.value.match(/[^0-9/]/g)) {
        this.expirationDateEl.value = this.expirationDateEl.value.replace(
          /[^0-9/]/g,
          ''
        );
      }

      if (
        event.inputType === 'deleteContentBackward' &&
        /[0-9]{2}/.test(this.expirationDateEl.value.slice(-2))
      ) {
        this.expirationDateEl.value = this.expirationDateEl.value.slice(
          0,
          this.expirationDateEl.value.length - 1
        );
      }

      if (
        /[0-9]{2}/.test(this.expirationDateEl.value.slice(-2)) &&
        this.expirationDateEl.value.length < 4
      ) {
        this.expirationDateEl.value += '/';
      }
    });
  }

  private validateCVVField(): void {
    this.cvvEl.addEventListener('input', () => {
      if (this.cvvEl.value.length > 3) {
        this.cvvEl.value = this.cvvEl.value.slice(0, 3);
      }

      if (this.cvvEl.value.match(/[^0-9]/g)) {
        this.cvvEl.value = this.cvvEl.value.replace(/[^0-9]/g, '');
      }
    });
  }

  private changeImageSrc(): void {
    this.cardNumberEl.addEventListener('input', () => {
      const cardNumber = this.cardNumberEl.value;
      if (cardNumber[0] == '2') {
        this.cardLogo.src = './../../assets/img/payment-sys-mir.png';
      } else if (cardNumber[0] == '3') {
        this.cardLogo.src = './../../assets/img/payment-sys-ae.png';
      } else if (cardNumber[0] == '4') {
        this.cardLogo.src = './../../assets/img/payment-sys-visa.png';
      } else if (cardNumber[0] == '5') {
        this.cardLogo.src = './../../assets/img/payment-sys-mastercard.png';
      } else if (cardNumber[0] == '6') {
        this.cardLogo.src = './../../assets/img/payment-sys-belcard.png';
      } else if (cardNumber[0] == null) {
        this.cardLogo.src = './../../assets/img/payment-sys-nologo.png';
      }
    });
  }

  @autoBind
  private submitHandler(event: Event): void {
    event.preventDefault();

    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      this.submitUndCloseModal();
    }
  }

  private submitUndCloseModal(): void {
    setTimeout(() => this.modal.classList.add('modal__hidden'), 5000);
    this.formEl.innerHTML =
      'Thanks for your order. Redirect to the store after 5 sec';
  }

  private gatherUserInput(): string[] | void {
    const name = this.nameEl.value;
    const phoneNumber = this.phoneNumberEl.value;
    const email = this.emailEl.value;
    const address = this.addressEl.value;
    const cardNumber = this.cardNumberEl.value;
    const expirationDate = this.expirationDateEl.value;
    const cvv = this.cvvEl.value;

    const nameValidatable: Validatable = {
      value: name,
      required: true,
      minLengthCharacters: 3,
      countWord: 2,
    };

    const phoneNumberValidatable: Validatable = {
      value: phoneNumber,
      required: true,
      regexp: /^[+][\d() -]{8,}\d$/,
    };

    const emailValidatable: Validatable = {
      value: email,
      required: true,
      regexp: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    };

    const addressValidatable: Validatable = {
      value: address,
      required: true,
      minLengthCharacters: 5,
      countWord: 3,
      regexp: /^([0-9a-zA-Z]{5,} ){2}[0-9a-zA-Z]{5,}/,
    };

    const cardNumberValidatable: Validatable = {
      value: cardNumber,
      required: true,
      minLength: 19,
      regexp: /^([0-9]{4} ){3}[0-9]{4}$/,
    };

    const expirationDateValidatable: Validatable = {
      value: expirationDate,
      required: true,
      minLength: 5,
      regexp: /^\d{2}\/\d{2}$/,
      maxValueMonth: 12,
      minValueYear: 23,
    };

    const cvvValidatable: Validatable = {
      value: cvv,
      required: true,
      minLength: 3,
    };

    if (
      !validate(nameValidatable) ||
      !validate(phoneNumberValidatable) ||
      !validate(emailValidatable) ||
      !validate(addressValidatable) ||
      !validate(cardNumberValidatable) ||
      !validate(expirationDateValidatable) ||
      !validate(cvvValidatable)
    ) {
      this.showErrorMessage(nameValidatable, this.nameEl);
      this.showErrorMessage(phoneNumberValidatable, this.phoneNumberEl);
      this.showErrorMessage(emailValidatable, this.emailEl);
      this.showErrorMessage(addressValidatable, this.addressEl);
      this.showErrorMessage(cardNumberValidatable, this.cardNumberEl);
      this.showErrorMessage(expirationDateValidatable, this.expirationDateEl);
      this.showErrorMessage(cvvValidatable, this.cvvEl);
      return;
    }

    return [name, phoneNumber, email, address, cardNumber, expirationDate, cvv];
  }

  private displayError(input: HTMLElement): void {
    input.classList.add('error');
    const div = document.createElement('div');
    div.className = 'error-message';
    div.textContent = 'error';
    return input.after(div);
  }

  private removeError(input: HTMLElement): void {
    input.classList.remove('error');
    const div = <HTMLDivElement>document.querySelector('.error-message');
    return div.remove();
  }

  private showErrorMessage(validatable: Validatable, input: HTMLElement): void {
    if (!validate(validatable)) {
      if (!input.classList.contains('error')) {
        this.displayError(input);
      }
    } else {
      if (input.classList.contains('error')) {
        this.removeError(input);
      }
    }
  }

  private closeModal(): void {
    this.formGroupClose.addEventListener('click', () => {
      this.modal.classList.toggle('modal__hidden');
    });
  }
}

export default ValidateProjectInput;
