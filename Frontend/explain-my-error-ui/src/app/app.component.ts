import { Component } from '@angular/core';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { ExplanationOutputComponent } from './components/explanation-output/explanation-output.component';
import { ExplainService } from './services/explain.service';
interface Explanation {
  meaning: string;
  cause: string;
  check: string;
  mistake?: string;
}

@Component({
  selector: 'app-root',
  imports: [ErrorInputComponent, ExplanationOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'explain-my-error-ui';
  errorText: string = '';
  isLoading: boolean = false;
  explanation: Explanation | null = null;
  errormessage = '';

  constructor(private explainService: ExplainService) {}

  onExplain(payload: { errorText: string; framework: string }) {
    this.isLoading = true;
    this.explanation = null;
    this.errormessage = '';

    this.explainService
      .explainError(payload.errorText, payload.framework)
      .subscribe({
        next: (res) => {
          this.explanation = res;
          this.isLoading = false;
        },
        error: () => {
          this.errormessage = 'Could not explain this error';
          this.isLoading = false;
        },
      });
  }
}
