import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const url = 'http://localhost:3000/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

   uploadFormData(x: FormData) {
    this.http.post(url, x).subscribe(
      res => console.log(res),
      error => console.log(error));
   }
}
