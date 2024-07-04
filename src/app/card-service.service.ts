import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';


@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  apiRickMorty = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  //methode de récup des personnages
  getPersonnage(): Observable<Card> {
    const numRandom = Math.floor(Math.random()*826 +1);
    return this.http.get<Card>(`${this.apiRickMorty}${numRandom}`)
  }
}
