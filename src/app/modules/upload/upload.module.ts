import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UploadModule { }
