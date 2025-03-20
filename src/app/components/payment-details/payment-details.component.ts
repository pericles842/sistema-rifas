import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {
  payments: any[] = [
    {
      ci: '309488576',
      label: 'Banco de Venezuela',
      code: '0102',
      type_account: 'corriente',
      cel: '04142522562'
    },
    {
      ci: '309488576',
      label: 'Mercantil',
      code: '0102',
      type_account: 'corriente',
      cel: '04142522562'
    },
    {
      ci: '309488576',
      label: 'Banesco',
      code: '0102',
      type_account: 'corriente',
      cel: '04142522562'
    }
  ]


 

}
