import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private htttp: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);

  }
  getAll(): Observable<Animal[]>{
    return  this.htttp.get<Animal[]>(this.apiUrl);

  }
  getItem(id: number): Observable<Animal> {
    return this.htttp.get<Animal>(`${this.apiUrl}/${id}`)

  }
}
