import { Component, OnInit } from '@angular/core';
import { ViewDataService } from 'src/app/services/view-data.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  menuItem = null;

  globalPackages = [
    '@angular/cli@latest',
    'express',
    'express-generator',
    'mongoose',
  ];

  projectPackages = [
    'cors',
    'express-fileupload',
    'mongoose',
    'socketio',
    'body-parser'
  ];

  constructor(
    private viewDataService: ViewDataService
  ) { }

  ngOnInit(): void {
    this.menuItem = this.viewDataService.getMenuList()[0];
  }

}
