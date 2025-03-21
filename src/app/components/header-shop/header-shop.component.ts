import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({

    selector: 'app-header-shop',
    templateUrl: './header-shop.component.html',
    styleUrls: ['./header-shop.component.scss']
})
export class HeaderShopComponent {
    items: MenuItem[] | undefined;
    viewDialog: boolean = false
    /**
     *Modo de ingreso
     *
     * @type {('sign-in' | 'sign-up')}
     * @memberof HeaderShopComponent
     */
    modeSign: 'sign-in' | 'sign-up' = 'sign-in'

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }

    openModal(mode: 'sign-in' | 'sign-up') {
        this.viewDialog = true
        this.modeSign = mode
    }
}
