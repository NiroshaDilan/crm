import {Component, OnInit} from '@angular/core';
import {faFileAlt, faListAlt} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-savings-accounts',
  templateUrl: './savings-accounts.component.html',
  styleUrls: ['./savings-accounts.component.scss']
})
export class SavingsAccountsComponent implements OnInit {

  list = faListAlt;
  file = faFileAlt;
  plusSquare = faPlusSquare;

  constructor() {
  }

  ngOnInit(): void {
  }

}
