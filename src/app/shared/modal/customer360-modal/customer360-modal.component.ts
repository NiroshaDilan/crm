import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {faBookOpen, faCubes, faDollarSign, faSquare, faSuitcase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer360-modal',
  templateUrl: './customer360-modal.component.html',
  styleUrls: ['./customer360-modal.component.scss']
})
export class Customer360ModalComponent implements OnInit {

  @Input() fromParent;

  suitcase = faSuitcase;
  square = faSquare;
  bookOpen = faBookOpen;
  dollarSign = faDollarSign;
  cubes = faCubes;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.fromParent)
  }

}
