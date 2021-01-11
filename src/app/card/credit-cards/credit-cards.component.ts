import { Component, OnInit } from '@angular/core';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  plusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
