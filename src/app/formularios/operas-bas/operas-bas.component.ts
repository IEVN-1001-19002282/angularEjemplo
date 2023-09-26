import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  value:string='';


  num1:string='';
  num2:string='';
  resultado:number=0;
  valorActivo = document.querySelector('input[name="sumar"]:checked');
  valor = document.getElementById('sumar')?.ariaChecked;
  
  mostrarSeleccionado()
{
  if (document.querySelector('input[id="sumar"]:checked')) {
    this.sumar();
  }
  if (document.querySelector('input[id="restar"]:checked')) {
    this.restar();
  }
  if (document.querySelector('input[id="multiplicar"]:checked')) {
    this.multiplicar();
  }
  if (document.querySelector('input[id="dividir"]:checked')) {
    this.dividir();
  }
}

  

  sumar(){
    this.resultado= parseInt(this.num1)+parseInt(this.num2);
  }

  restar(){
    this.resultado= parseInt(this.num1)-parseInt(this.num2);
  }

  multiplicar():void{
    this.resultado= parseInt(this.num1)*parseInt(this.num2);
  }

  dividir():void{
    this.resultado= parseInt(this.num1)/parseInt(this.num2);
  }
    
  
}
