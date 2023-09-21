import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///directivas *ngif
product:any[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"datos pendientes"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"datos pendientes"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    'year':"marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl":"datos pendientes"
  }
]
}
