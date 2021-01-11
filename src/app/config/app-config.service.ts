import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  public static URL_APP_BASE: string = environment.appRoot;

  API = {
    CUSTOMER_LIMITED: AppConfig.URL_APP_BASE + 'customerlimited',
    CUSTOMER_BY_NIC: AppConfig.URL_APP_BASE + 'userid?nicOrPasspot='
  };
}
