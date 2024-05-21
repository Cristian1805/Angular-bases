import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <h4>Counter: {{ counter }}</h4>
      <button (click)="incrementarContador()"> +1 </button>
      <button (click)="decrementarContador()"> -1 </button>
      <button (click)="limpiarContador()"> Limpiar </button>
    </div>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  incrementarContador(): void {
    this.counter += 1;
  }

  decrementarContador(): void {
    this.counter -= 1;
  }

  limpiarContador(): void {
    this.counter = 0;
  }
}
