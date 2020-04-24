import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';
import { DownloadService } from 'src/app/services/download.service';
import { Observable } from 'rxjs';

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

  download() {
    this.downloadService.downloadFile(this.fileName).subscribe( res => {
      if (res) {
        console.log('file downloaded!');
        const blob = new Blob([res], { type: 'image/jpeg'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      }
    });
  }

}
