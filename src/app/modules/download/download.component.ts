import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';
import { DownloadService } from 'src/app/services/download.service';
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  menuItem = null;
  fileName = 'cat5.jpeg';

  constructor(
    private viewDataService: ViewDataService,
    private downloadService: DownloadService
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[3];
  }

  returnBlob(res): Blob {
    console.log('file downloaded!');
    return new Blob([res], { type: 'image/jpeg'});
  }

  download() {
    this.downloadService.downloadFile(this.fileName).subscribe( res => {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      }
    });
  }

  download2() {
    this.downloadService.downloadFile(this.fileName).subscribe( res => {
      if (res) {
        fileSaver.saveAs(this.returnBlob(res), this.fileName);
      }
    });
  }

}
