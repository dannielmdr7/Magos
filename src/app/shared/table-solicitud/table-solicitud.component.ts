import { Component, Input } from '@angular/core';
import { NewUser } from '../Interfaces/NewUserInterface';

@Component({
  selector: 'app-table-solicitud',
  templateUrl: './table-solicitud.component.html',
  styleUrls: ['./table-solicitud.component.css'],
})
export class TableSolicitudComponent {
  @Input() Solicitudes: NewUser[] = [];
}
