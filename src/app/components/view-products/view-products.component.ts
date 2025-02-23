import { Component } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent {

  images: any[] = [
    {
      url: './assets/images/producto.jpg'
    },
    {
      url: './assets/images/producto-2.jpg'
    },
    {
      url: './assets/images/producto-3.jpg'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '767px',
      numVisible: 3
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  constructor() { }

  ngOnInit() { }

}
