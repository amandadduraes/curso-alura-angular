import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferĂȘncia');
    console.log('Valor: ', this.valor);
    console.log('Valor: ', this.destino);
  }
}
