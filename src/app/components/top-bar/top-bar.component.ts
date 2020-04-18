import { Component, OnInit, Input } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() title: string;
  menuList = null;

  constructor(
    private viewDataService: ViewDataService
  ) { }

  ngOnInit(): void {
    this.menuList = this.viewDataService.getMenuList();
  }

}
