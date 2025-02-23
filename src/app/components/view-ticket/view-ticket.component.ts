import { Component } from '@angular/core';
import { Ticket } from './view-ticket';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent {

  ticketList: Ticket[][] = [
    [
      {
        amount: 2,
        label: '2 tickets',
        price: 100,
        description: ''
      },
      {
        amount: 5,
        label: '5 tickets',
        price: 100,
        description: 'Mas vendido'
      },
      {
        amount: 10,
        label: '10 tickets',
        price: 100,
        description: ''
      }
    ],
    [
      {
        amount: 15,
        label: '15 tickets',
        price: 100,
        description: ''
      },
      {
        amount: 20,
        label: '20 tickets',
        price: 100,
        description: 'Mas vendido'
      },
      {
        amount: 25,
        label: '25 tickets',
        price: 100,
        description: ''
      }
    ]
  ]
}
