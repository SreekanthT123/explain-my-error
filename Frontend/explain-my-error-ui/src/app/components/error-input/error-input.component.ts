import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-error-input',
  imports: [FormsModule],
  templateUrl: './error-input.component.html',
  styleUrl: './error-input.component.css'
})
export class ErrorInputComponent {
  errorText:string = '';
  framework:string = '';
  @Input() isLoading = false;

  @Output() explain = new EventEmitter<{
    errorText:string;
    framework:string;
  }>();

  onExplain(){
    this.explain.emit({errorText:this.errorText,framework:this.framework});
  }
}
