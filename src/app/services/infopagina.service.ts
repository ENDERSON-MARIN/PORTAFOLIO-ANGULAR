import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoPagina } from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: "root"
})
export class InfopaginaService {
  info: InfoPagina = {};
  cargada = false;

  equipo: any[]=[];

  constructor(private http: HttpClient) {
    console.log("servicio de infopagina Listo");
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    
    //Leer el archivo json local

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
       // console.log(resp);
      
    });
  }

  private cargarEquipo(){
    
    //Leer el archivo json de firebase

    this.http.get('https://portafolio-angular-f1ea3.firebaseio.com/equipo.json')
    .subscribe( (resp:any[]) => {
    this.equipo=resp;
      // console.log(resp);
    });
  }
}
