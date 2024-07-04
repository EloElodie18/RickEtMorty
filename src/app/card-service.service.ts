import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  apiRickMorty = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  //methode de récup des personnages
  getPersonnage(): Observable<any> {
    //penser à retyper après
    return this.http.get<any>(this.apiRickMorty);
  }

}
