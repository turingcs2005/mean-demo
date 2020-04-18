import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  menuList = null;

  constructor(
    public viewDataService: ViewDataService
  ) { }

  ngOnInit(): void {
    this.menuList = this.viewDataService.getMenuList();
  }

}
