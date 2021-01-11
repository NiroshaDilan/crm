import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewCustomerComponent} from './view-customer/view-customer.component';
import {ImportCustomerComponent} from './import-customer/import-customer.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes: Routes = [
  {path: 'view-customers', component: ViewCustomerComponent},
  {path: 'import-customers', component: ImportCustomerComponent}
];

@NgModule({
    declarations: [
        ViewCustomerComponent,
        ImportCustomerComponent,
        CustomerProfileComponent
    ],
    exports: [
        CustomerProfileComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(routes),
    ]
})
export class CustomerModule {
}
