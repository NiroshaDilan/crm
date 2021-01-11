import { Component, OnInit } from '@angular/core';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-debit-cards',
  templateUrl: './debit-cards.component.html',
  styleUrls: ['./debit-cards.component.scss']
})
export class DebitCardsComponent implements OnInit {

  plusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
