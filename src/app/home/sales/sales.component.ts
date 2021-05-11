import { SalesService } from './sales.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Sales, ColumnData, Data } from './sales.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit, OnDestroy {
  salesData: Sales;
  productID: ColumnData;
  productName: ColumnData;
  sales: ColumnData;
  totalSales: ColumnData;
  yearQ1: ColumnData;
  yearQ2: ColumnData;
  yearQ3: ColumnData;
  yearQ4: ColumnData;
  selectedProduct: Data;
  display: boolean = false;
  productInfo: Data;
  _popupTitle: string = "";

  constructor(private salesService: SalesService, public dialogService: DialogService) { }

  ngOnInit(): void {
    const productInfo = JSON.parse(localStorage.getItem('newProduct'));
    this.salesData = this.salesService.salesData;

    if (productInfo) {
      this.salesData.data.push(productInfo);
    }

    // table headers
    const [productID, productName, sales, totalSales] = this.salesData.column;
    this.productID = productID;
    this.productName = productName;
    this.sales = sales;
    this.totalSales = totalSales;

    // table sub-headers years
    const [yearQ1, yearQ2, yearQ3, yearQ4] = this.sales.subHeaders;
    this.yearQ1 = yearQ1;
    this.yearQ2 = yearQ2;
    this.yearQ3 = yearQ3;
    this.yearQ4 = yearQ4;
  }

  // onRowSelect
  onRowSelect(event) {
    console.log('selectedProduct', this.selectedProduct);
    this.productInfo = this.selectedProduct
    this.display = true;
    this.popupTitle = 'Edit product'
  }

  // onRowUnselect
  onRowUnselect(event) {
    console.log('unselectedRow: ', event)
  }

  // addNew Product
  addNew() {
    this.display = true;
    this.productInfo = new Data();
    this.popupTitle = 'Add product';
  }

  // getter popuptitle
  get popupTitle(): string {
    return this._popupTitle;
  }

  // setter popuptitle
  set popupTitle(value: string) {
    this._popupTitle = value;
  }

  // ngOnDestory
  ngOnDestroy() {
    localStorage.removeItem('newProduct');
  }

}
