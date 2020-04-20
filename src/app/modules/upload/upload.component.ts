import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  menuItem = null;
  myForm: FormGroup = null;
  selectedFile: File = null;
  jsonResponse = null;
  textResponse = null;

  constructor(
    private viewDataService: ViewDataService,
    private upLoadService: UploadService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[2];

    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  onSubmit() {
    this.upLoadService.onUploadFile(this.selectedFile);
    this.upLoadService.onUploadForm(this.myForm.value);
  }

  getText() {
    this.upLoadService.onGetText().subscribe( data => {
      this.textResponse = data;
      console.log(this.textResponse);
    });
  }

  getJSON() {
    this.upLoadService.onGetJSON().subscribe( data => {
      this.jsonResponse = data;
      console.log(this.jsonResponse);
    });
  }

}
