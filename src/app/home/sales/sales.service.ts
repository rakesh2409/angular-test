import { Injectable } from '@angular/core';
import * as data from './potato_sales.json'
import { Sales } from './sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  public _salesData: Sales = (data as any).default
  constructor() { }

  get salesData() {
    return this._salesData;
  }
}
