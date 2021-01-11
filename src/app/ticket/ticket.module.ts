import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TicketsComponent} from './tickets/tickets.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CreateTicketComponent} from './create-ticket/create-ticket.component';
import {ViewTicketComponent} from './view-ticket/view-ticket.component';
import {ImportTicketComponent} from './import-ticket/import-ticket.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxTinymceModule} from 'ngx-tinymce';
import {TicketComplaintComponent} from './ticket-complaint/ticket-complaint.component';
import {NgWizardConfig, NgWizardModule, THEME} from 'ng-wizard';
import { TicketComplaintOverviewComponent } from './ticket-complaint/ticket-complaint-overview/ticket-complaint-overview.component';
import { BPMProcessComponent } from './ticket-complaint/bpmprocess/bpmprocess.component';
import { PlannedActivityComponent } from './ticket-complaint/planned-activity/planned-activity.component';
import { PastActivityComponent } from './ticket-complaint/past-activity/past-activity.component';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';

const routes: Routes = [
  {path: 'create-ticket', component: CreateTicketComponent},
  {path: 'view-tickets', component: ViewTicketComponent},
  {path: 'import-tickets', component: TicketComplaintComponent},
  {path: 'ticket-complaint', component: TicketComplaintComponent}
];

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
}

@NgModule({
    declarations: [
        TicketsComponent,
        CreateTicketComponent,
        ViewTicketComponent,
        ImportTicketComponent,
        TicketComplaintComponent,
        TicketComplaintOverviewComponent,
        BPMProcessComponent,
        PlannedActivityComponent,
        PastActivityComponent,
        OpenTicketComponent
    ],
    exports: [
        TicketsComponent
    ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/5.3.2/'
    }),
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class TicketModule {
}
