import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-session-5';

  inputText = 'Meu texto inicial';
  inputType = 'text';
  isDisabled = false;
  buttonLogTitle = 'Botão de log';

  buttonDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyUp(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log('-> ' + currentText);
  }

  onButtonClick() {
    this.buttonLogTitle = 'Título alteradoooooooooo';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
