import { Ticket } from "../components/view-ticket/view-ticket";


export class Rifa {
    id: number = Math.floor(Math.random() * 100000000) + 1;
    name: string = 'Rifa de prueba ';
    description: string = 'Esta rifa es ejemplo';
    end_of_rifa: Date = new Date()
    start_of_rifa: Date = new Date()
    images: { url: string }[] = []
    tickets: number = 100;
    price_ticket: number = 300;
    ticket_cards: Ticket[][] = [
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

    constructor(
        name: string,
        description: string,
        end_of_rifa: Date,
        images: { url: string }[],
        tickets: number,
        price_ticket: number,
        ticket_cards?: Ticket[][]
    ) {
        this.name = name;
        this.description = description;
        this.end_of_rifa = end_of_rifa || new Date();
        this.images = images;
        this.tickets = tickets;
        this.price_ticket = price_ticket;
        this.ticket_cards = ticket_cards ?? this.ticket_cards;
    }
}
