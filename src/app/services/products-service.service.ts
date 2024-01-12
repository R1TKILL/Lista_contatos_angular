import { Injectable } from '@angular/core';

import { Contacts } from '../ContactModels/Contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient){}

  private readonly apiUrl: string = "http://localhost:8000";

  /***Methods for API***/

  //Method for create new contact.
  insertClient(obj:Contacts): Observable<Contacts>{
    return this.http.post<Contacts>(this.apiUrl, obj);
  }

  //Method for read all contacts.
  getAllContacts(): Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this.apiUrl);
  }

  //Method for read one contact by id.
  getIdContact(id: number): Observable<Contacts>{
    return this.http.get<Contacts>(`${this.apiUrl}/${id}`);
  }

  //Method for update contact by id.
  UpdateDatesClient(obj: Contacts): Observable<Contacts>{
    return this.http.put<Contacts>(this.apiUrl, obj);
  }

  //Method for delete contact by id.
  DeleteClientID(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
