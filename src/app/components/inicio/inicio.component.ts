import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  public sexo:string = "Femenino";

  public sumarEdad():number
  {
    if (this.edad >= 0){
      this.edad+=1;
    }
    return this.edad;
  }

  constructor(private router: Router)
  {

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

  public calcularIndiceMasaCorporal():void
  {
    let altura = this.altura/100;
    this.indice = this.peso / Math.pow(altura, 2);
    this.router.navigate(["resultado", this.indice.toFixed(2),this.sexo]);
  }

  public cargarSexoF():void
  {
    this.sexo="Femenino";
    const fem = document.getElementById('femenino');
    fem!.style.backgroundColor = 'rgb(143, 198, 246)';

    const masc = document.getElementById('masculino');
    masc!.style.backgroundColor = 'rgb(82, 171, 249)';
  }

  public cargarSexoM():void
  {
    this.sexo="Masculino";
    const masc = document.getElementById('masculino');
    masc!.style.backgroundColor = 'rgb(143, 198, 246)';

    const fem = document.getElementById('femenino');
    fem!.style.backgroundColor = 'rgb(82, 171, 249)';
  }
}
