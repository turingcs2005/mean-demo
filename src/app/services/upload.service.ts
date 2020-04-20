import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  onUploadForm(data) {
    console.log('Form uploaded!');
    // this.api.addSales(this.salesForm.value).subscribe( (res: any) => {
    //   this.isLoadingResults = false;
    //   const id = res._id;
    //   // emit 'updatedata' event to server
    //   this.socket.emit('updatedata', res);
    //   // navigate to newly created item page
    //   this.router.navigate(['/sales-details', id]);
    // }, (err: any) => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
  }

  onUploadFile(file: File) {

    // const fd = new FormData();
    // fd.append('image', file, file.name);

    // // submit form data to API in a post request
    this.http.post(url, file).subscribe( res => {
      console.log(res);
    });
  }

  onGetJSON() {
    return this.http.get(url + '/get_json');
  }

  onGetText() {
    // alternatively, use
    // const options = {
    //   responseType: 'text' as const
    // };
    // return this.http.get(url _ '/get_text', options);

    return this.http.get(url + '/get_text', {responseType: 'text'});
  }

}
