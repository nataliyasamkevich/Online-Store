import ValidateProjectInput from '../controllers/modal';

export class ModalView {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.draw();
    new ValidateProjectInput();
  }

  draw() {
    this.container.innerHTML = '';

    const modal = this.createElement('div', 'modal');
    const modalContent = this.createElement('div', 'modal__content');
    const form = this.createElement('form', 'form');
    const formGroupClose = this.createElement('div', 'form-group__close');
    const formGroupLeft = this.createElement('fieldset', 'form-group');
    const formGroupRight = this.createElement('fieldset', 'form-group');
    const buttonBackground = this.createElement('div', 'button-background');

    const formGroupTitleLeft = this.createElement(
      'legend',
      'form-group__title'
    );
    formGroupTitleLeft.textContent = 'Billing information';

    const formGroupTitleRight = this.createElement(
      'legend',
      'form-group__title'
    );
    formGroupTitleRight.textContent = 'Payment infomation';

    const formGroupColumnLeft = this.createElement('div', 'form-group__column');
    const formGroupColumnRight = this.createElement(
      'div',
      'form-group__column'
    );

    const formGroupItemName = this.createElement('div', 'form-group__item');
    const formGroupLabelName = this.createLabel(
      'form-group__label',
      'name',
      'Name, surname'
    );
    const formGroupContainerName = this.createElement('div', 'form__container');
    const formGroupInputName = this.createInput(
      'form-group__input',
      'text',
      'name'
    );

    const formGroupItemPhone = this.createElement('div', 'form-group__item');
    const formGroupLabelPhone = this.createLabel(
      'form-group__label',
      'phoneNumber',
      'Phone'
    );
    const formGroupContainerPhone = this.createElement(
      'div',
      'form__container'
    );
    const formGroupInputPhone = this.createInput(
      'form-group__input',
      'text',
      'phoneNumber'
    );

    const formGroupItemEmail = this.createElement('div', 'form-group__item');
    const formGroupLabelEmail = this.createLabel(
      'form-group__label',
      'email',
      'E-mail'
    );
    const formGroupContainerEmail = this.createElement(
      'div',
      'form__container'
    );
    const formGroupInputEmail = this.createInput(
      'form-group__input',
      'text',
      'e-mail'
    );

    const formGroupItemAddress = this.createElement('div', 'form-group__item');
    const formGroupLabelAddress = this.createLabel(
      'form-group__label',
      'address',
      'Shipping address'
    );
    const formGroupContainerAddress = this.createElement(
      'div',
      'form__container'
    );

    const formGroupTextareaAddress = this.createElement(
      'textarea',
      'form-group__textarea'
    );
    if (formGroupTextareaAddress instanceof HTMLTextAreaElement) {
      formGroupTextareaAddress.name = 'address';
      formGroupTextareaAddress.id = 'address';
      formGroupTextareaAddress.cols = 30;
      formGroupTextareaAddress.rows = 3;
    }

    const formGroupItemCardNumber = this.createElement(
      'div',
      'form-group__item'
    );
    const formGroupLabelCardNumber = this.createLabel(
      'form-group__label',
      'card-number',
      'Card number'
    );
    const formGroupContainerCardNumber = this.createElement(
      'div',
      'form__container'
    );
    const formGroupInputCardNumber = this.createInput(
      'form-group__input',
      'text',
      'card-number'
    );

    const formGroupItemExpirationDate = this.createElement(
      'div',
      'form-group__item'
    );
    const formGroupLabelExpirationDate = this.createLabel(
      'form-group__label',
      'expiration-date',
      'Expiration date'
    );
    const formGroupContainerExpirationDate = this.createElement(
      'div',
      'form__container'
    );
    const formGroupInputExpirationDate = this.createInput(
      'form-group__input',
      'text',
      'expiration-date'
    );

    const formGroupRow = this.createElement('div', 'form-group__row');
    const cardLogo = this.createElement('img', 'card__logo');
    if (cardLogo instanceof HTMLImageElement) {
      cardLogo.src = './../../assets/img/payment-sys-nologo.png';
      cardLogo.alt = 'card-logo';
    }

    const formGroupItemCVV = this.createElement('div', 'form-group__item');
    formGroupItemCVV.classList.add('form-group__item_small');
    const formGroupLabelCVV = this.createLabel(
      'form-group__label',
      'cvv',
      'CVV'
    );
    formGroupLabelCVV.classList.add('form-group__label_small');
    const formGroupContainerCVV = this.createElement('div', 'form__container');

    const formGroupInputCVV = this.createInput(
      'form-group__input',
      'text',
      'cvv'
    );
    formGroupInputCVV.classList.add('form-group__input_small');

    const formGroupButton = document.createElement('button');
    formGroupButton.classList.add('form-group__button', 'button');
    formGroupButton.type = 'submit';
    formGroupButton.textContent = 'Submit';

    modal.append(modalContent);
    modalContent.append(form);
    form.append(
      formGroupClose,
      formGroupLeft,
      formGroupRight,
      buttonBackground
    );

    formGroupLeft.append(formGroupTitleLeft, formGroupColumnLeft);
    formGroupRight.append(formGroupTitleRight, formGroupColumnRight);
    buttonBackground.append(formGroupButton);

    formGroupColumnLeft.append(
      formGroupItemName,
      formGroupItemPhone,
      formGroupItemEmail,
      formGroupItemAddress
    );
    formGroupColumnRight.append(
      formGroupItemCardNumber,
      formGroupItemExpirationDate,
      formGroupRow
    );

    formGroupItemName.append(formGroupLabelName, formGroupContainerName);
    formGroupContainerName.append(formGroupInputName);

    formGroupItemPhone.append(formGroupLabelPhone, formGroupContainerPhone);
    formGroupContainerPhone.append(formGroupInputPhone);

    formGroupItemEmail.append(formGroupLabelEmail, formGroupContainerEmail);
    formGroupContainerEmail.append(formGroupInputEmail);

    formGroupItemAddress.append(
      formGroupLabelAddress,
      formGroupContainerAddress
    );
    formGroupContainerAddress.append(formGroupTextareaAddress);

    formGroupItemCardNumber.append(
      formGroupLabelCardNumber,
      formGroupContainerCardNumber
    );
    formGroupContainerCardNumber.append(formGroupInputCardNumber);

    formGroupItemExpirationDate.append(
      formGroupLabelExpirationDate,
      formGroupContainerExpirationDate
    );
    formGroupContainerExpirationDate.append(formGroupInputExpirationDate);

    formGroupRow.append(formGroupItemCVV, cardLogo);
    formGroupItemCVV.append(formGroupLabelCVV, formGroupContainerCVV);
    formGroupContainerCVV.append(formGroupInputCVV);

    this.container.append(modal);
  }

  createElement(tagName: string, classList: string) {
    const element = document.createElement(tagName);
    element.classList.add(classList);

    return element;
  }

  createLabel(classList: string, htmlFor: string, textContent: string) {
    const formGroupLabel = document.createElement('label');
    formGroupLabel.classList.add(classList);
    formGroupLabel.htmlFor = htmlFor;
    formGroupLabel.textContent = textContent;

    return formGroupLabel;
  }

  createInput(classList: string, type: string, id: string) {
    const formGroupInput = document.createElement('input');
    formGroupInput.classList.add(classList);
    formGroupInput.type = type;
    formGroupInput.id = id;

    return formGroupInput;
  }
}
