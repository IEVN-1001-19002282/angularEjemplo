import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///directivas *ngif
imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImg=!this.muestraImg;
}

product:IProductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/1366_2000.jpg"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    'year':"marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"https://img.remediosdigitales.com/b68fd4/kia-rio-gt-line_1/1366_2000.jpg"
  }
]
}
