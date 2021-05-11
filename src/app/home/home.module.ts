import { SalesService } from './sales/sales.service';
import { SalesComponent } from './sales/sales.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        HomeComponent,
        NewProductComponent,
        SalesComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        TableModule,
        DialogModule,
        ToastModule
    ],
    providers: [SalesService, DialogService]
})
export class HomeModule { }