import {Component, OnInit} from '@angular/core';
import {faBookOpen, faSquare} from '@fortawesome/free-solid-svg-icons';
import {NgWizardService} from 'ng-wizard';

@Component({
  selector: 'app-ticket-complaint',
  templateUrl: './ticket-complaint.component.html',
  styleUrls: ['./ticket-complaint.component.scss']
})
export class TicketComplaintComponent implements OnInit {

  constructor() {
  }

  square = faSquare;
  bookOpen = faBookOpen;
  justified = 'fill';

  ngOnInit(): void {
  }

}
