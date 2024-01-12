import { Injectable } from '@angular/core';

import { Animal } from '../interfaces/Animal';
//Para requisições http
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Para garantir sucesso nas requisições.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl: string = "http://localhost:3000/animals";

  constructor(private http: HttpClient) {}

  //Delete
  /*remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);  
  }*/

  //Delete
  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }

  //Read
  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  //Read one data.
  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
 