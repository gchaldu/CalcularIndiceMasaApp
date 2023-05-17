import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public altura: number = 170;
  public peso: number = 70;
  public edad: number = 40;
  public indice: number = 0;

  public sumarEdad():number
  {
    if (this.edad >= 0){
      this.edad+=1;
    }
    return this.edad;
  }

  public restarEdad():number
  {
    if (this.edad > 0){
      this.edad-=1;
    }
    return this.edad;
  }

  public sumarPeso():number
  {
    if (this.peso >= 0){
      this.peso+=1;
    }
    return this.peso}

  public restarPeso():number
  {
    if (this.peso > 0){
      this.peso-=1;
    }
    return this.peso;
  }

  public alturaPersona(event:any):void
  {
    this.altura = event.target.value;
  }

  public calcularIndiceMasaCorporal():number
  {
    return this.indice = this.peso / Math.pow(this.altura, 2);
  }
}
