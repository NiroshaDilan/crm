import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Customer360ModalComponent} from '../../shared/modal/customer360-modal/customer360-modal.component';
import {CustomerService} from '../../core/services/customer.service';
import {Customer} from '../../shared/dto/customer.model';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customerArray: Customer[];

  constructor(private modalService: NgbModal,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(data => {
        this.customerArray = data;
      });
  }

  openModal(nic: string) {
    const modalRef = this.modalService.open(Customer360ModalComponent, {size: 'lg'});

    modalRef.componentInstance.fromParent = {
      nic
    };

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {

    });
  }

}
