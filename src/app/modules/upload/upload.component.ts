import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  menuItem = null;
  myForm: FormGroup;
  response$: Observable<any>;
  success = false;

  constructor(
    private viewDataService: ViewDataService,
    private fb: FormBuilder,
    private uploadService: UploadService
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[2];
    this.myForm = this.fb.group({
      name: [null, Validators.required],
      sampleFile: [null, Validators.required]
    });
  }

  uploadFile(event) {
    console.log('file selected!');
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      sampleFile: file
    });
    this.myForm.get('sampleFile').updateValueAndValidity();
  }

  submitForm() {
    const formData: any = new FormData();
    formData.append('name', this.myForm.get('name').value);
    formData.append('sampleFile', this.myForm.get('sampleFile').value);
    this.response$ = this.uploadService.uploadFormData(formData);
    this.response$.subscribe(
      res => {
        if (res) {
          this.success = true;
        }
      }
    );


  }

}
