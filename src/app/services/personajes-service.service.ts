import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaUsuarioModel } from '../Model/UsuarioModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesServiceService {

  url = 'https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient) { }

  ObtenerPersonaje(){
    return this.http.get<ListaUsuarioModel>(`${this.url}`).pipe(
      map(resp=>{
        return resp.results;
      })
    );
  }
}
