import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  menuItem = null;

  constructor(
    private viewDataService: ViewDataService
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[3];
  }


}
