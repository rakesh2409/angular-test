import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'new-product', component: NewProductComponent },
            { path: 'sales', component: SalesComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }