import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartsModule, ThemeService} from 'ng2-charts';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './apps/todo-list/todo/todo.component';
import {SpinnerComponent} from './shared/spinner/spinner.component';
import {ContentAnimateDirective} from './shared/directives/content-animate.directive';
import {TodoListComponent} from './apps/todo-list/todo-list.component';
import {Customer360ModalComponent} from './shared/modal/customer360-modal/customer360-modal.component';
import {CustomerModule} from './customer/customer.module';
import {OpportunityComponent} from './opportunity/opportunity/opportunity.component';
import {SavingsAccountsComponent} from './account/savings-accounts/savings-accounts.component';
import {CurrentAccountsComponent} from './account/current-accounts/current-accounts.component';
import {DebitCardsComponent} from './card/debit-cards/debit-cards.component';
import {CreditCardsComponent} from './card/credit-cards/credit-cards.component';
import {DigitalBankingComponent} from './banking-type/digital-banking/digital-banking.component';
import {PrepaidCardsComponent} from './card/prepaid-cards/prepaid-cards.component';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckSquare, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {faSquare as farSquare, faCheckSquare as farCheckSquare} from '@fortawesome/free-regular-svg-icons';
import {faStackOverflow, faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {FixedDepositsComponent} from './investment/fixed-deposits/fixed-deposits.component';
import {LoansComponent} from './loan/loans/loans.component';
import {RemittancesComponent} from './remittance/remittances/remittances.component';
import {BusinessRelationshipComponent} from './business-relationship/business-relationship.component';
import {TicketModule} from './ticket/ticket.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    Customer360ModalComponent,
    OpportunityComponent,
    SavingsAccountsComponent,
    CurrentAccountsComponent,
    DebitCardsComponent,
    CreditCardsComponent,
    DigitalBankingComponent,
    PrepaidCardsComponent,
    FixedDepositsComponent,
    LoansComponent,
    RemittancesComponent,
    BusinessRelationshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    CustomerModule,
    TicketModule,
    CoreModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSuitcase, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium);
  }
}
