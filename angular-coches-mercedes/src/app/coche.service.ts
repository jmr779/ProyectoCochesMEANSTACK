import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coche } from './coche';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor(protected http: HttpClient) { }

  getCoches() {
    return this.http.get<Coche[]>('http://localhost:3000/coches/');
  }
}
