import { Component, OnInit } from '@angular/core';
import {faFileAlt, faListAlt} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-current-accounts',
  templateUrl: './current-accounts.component.html',
  styleUrls: ['./current-accounts.component.scss']
})
export class CurrentAccountsComponent implements OnInit {

  list = faListAlt;
  file = faFileAlt;
  plusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
