import {Injectable} from '@angular/core';
import {AppConfig} from '../../config/app-config.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../shared/dto/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private appConfig: AppConfig,
              private httpClient: HttpClient) {
  }

  getCustomers = (): Observable<Customer[]> => {
    return this.httpClient.get<Customer[]>(this.appConfig.API.CUSTOMER_LIMITED);
  }

  getCustomerByNicO = (nic: string): Observable<Customer> => {
    return this.httpClient.get<Customer>(this.appConfig.API.CUSTOMER_BY_NIC + nic);
  }
}
