import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExplainService {
  private API_URL = 'http://localhost:3000/api/explain-error';

  constructor(private http: HttpClient) {}

  explainError(errorText: string, framework: string) {
    return this.http.post<any>(this.API_URL, {
      errorText,
      framework,
    });
  }
}
