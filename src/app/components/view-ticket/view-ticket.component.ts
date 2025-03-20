import { Component } from '@angular/core';
import { Ticket } from './view-ticket';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent {
  viewModal: boolean = false
  ticketList: Ticket[][] = [
    [
      {
        amount: 2,
        label: '2 tickets',
        description: ''
      },
      {
        amount: 5,
        label: '5 tickets',
        description: 'Mas vendido'
      },
      {
        amount: 10,
        label: '10 tickets',
        description: ''
      }
    ],
    [
      {
        amount: 15,
        label: '15 tickets',
        description: ''
      },
      {
        amount: 20,
        label: '20 tickets',
        description: 'Mas vendido'
      },
      {
        amount: 25,
        label: '25 tickets',
        description: ''
      }
    ]
  ]
}
