import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  sidebarVisible = false;

  items = [
    {
      label: 'Administración',
      items: [
        {
          label: 'Cargos',
          icon: 'pi pi-plus'
        },
        {
          label: 'Usuarios',
          icon: 'pi pi-search'
        }
      ]
    },
    {
      label: 'Sorteos',
      items: [
        {
          label: 'Rifa',
          icon: 'pi pi-cog'
        },
        {
          label: 'Bancos',
          icon: 'pi pi-sign-out'
        },
        {
          label: 'Tasas',
          icon: 'pi pi-sign-out'
        }
      ]
    },
    {
      label: 'Cobranza',
      items: [
        {
          label: 'Comprobantes',
          icon: 'pi pi-cog'
        },
        {
          label: 'Bancos',
          icon: 'pi pi-sign-out'
        },
        {
          label: 'Tasas',
          icon: 'pi pi-sign-out'
        }
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  
  logout() {
    console.log("Cerrando sesión...");
  }
}

