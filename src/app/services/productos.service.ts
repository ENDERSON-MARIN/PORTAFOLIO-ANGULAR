import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoI} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoI[]=[];

  constructor(private http:HttpClient) {

    this.cargarProductos();
   }
  

  private cargarProductos(){

    this.http.get('https://portafolio-angular-f1ea3.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductoI[]) =>{

      console.log(resp);
      this.productos=resp;
      this.cargando = false;

    }
    );

  }
}

// setTimeout(() => {
//   this.cargando = false;
// }, 2000);
// });
