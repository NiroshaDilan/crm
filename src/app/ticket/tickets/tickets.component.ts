import { Component, OnInit } from '@angular/core';
import {faFileAlt, faListAlt, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  edit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
