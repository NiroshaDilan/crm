import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CustomerService} from '../../core/services/customer.service';
import {Customer} from '../../shared/dto/customer.model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit, OnChanges {

  @Input() nicNumber;

  customerProfile: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  getCustomerProfileByNic() {
    this.customerService.getCustomerByNicO(this.nicNumber.nic)
      .subscribe(profile => {
        this.customerProfile = profile;
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCustomerProfileByNic();
  }

}
