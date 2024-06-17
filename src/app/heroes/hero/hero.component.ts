import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'Ironman'
  public age: number = 45;

  get capitalizedName():string { //Esto es una propiedad
    return 'Hola Mundo'.toUpperCase();
  }


  public getHeroDescription():string { //Esto es un método
    return `${ this.name } - ${ this.age }`;

  }

  cambiarNombreHeroe(): void {
    this.name = 'Spiderman';
  }

  cambiarEdadHeroe(): void {
    this.age = 23;
  }

}
