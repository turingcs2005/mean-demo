import { Injectable } from '@angular/core';
import { menuList } from 'src/app/data/list_data';

@Injectable({
  providedIn: 'root'
})
export class ViewDataService {

  constructor() { }

  getMenuList() {
    return menuList;
  }
}
