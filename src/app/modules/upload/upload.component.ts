import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  menuItem = null;

  constructor(
    private viewDataService: ViewDataService
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[2];
  }


}
