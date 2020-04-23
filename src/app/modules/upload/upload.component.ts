import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  menuItem = null;
  myForm: FormGroup;

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
    this.uploadService.uploadFormData(formData);
  }

}
