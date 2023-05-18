import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{

  public imc:number=0;
  public resultado = '';
  public interpretacion = '';
  public sexo:string='';

  constructor(private activateRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.imc = Number.parseFloat(this.activateRoute.snapshot.paramMap.get('valor')!);
    this.sexo = this.activateRoute.snapshot.paramMap.get('sexo')!;
    this.mostrarResultado();
  }
  
  public mostrarResultado():void
  {
      if(this.imc >= 25)
      {
        this.resultado = 'EXCESO DE PESO';
        const res = document.getElementById('resultado');
        res!.style.color = 'red';
        const imc = document.getElementById('imc');
        imc!.style.color = 'red';
        this.interpretacion = 'Tiene un peso corporal superior al normal, Intente hacer más ejercicio';
      }else if(this.imc <= 18.5)
      {
        this.resultado = 'PESO BAJO';
        this.interpretacion = 'Tiene un peso corporal más bajo de lo normal. Se indica ir al nutricionista';
      }else if(this.imc > 18.5 && this.imc <= 25)
      {
        this.resultado = 'PESO NORMAL';
        this.interpretacion = 'Tiene un peso corporal normal';
      }
  }
}
