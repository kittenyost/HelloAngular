import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Game {

}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "http://localhost:3000/api";



  games$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])

  constructor(private http: HttpClient) { }

  // get all
  getAllGames(): void {
    this.http.get<any[]>(`${this.baseURL}/games`).subscribe(result => {
      console.log("get all games at service", result);
      this.games$.next(result);
    });
  }

  // get 1 by id
  getOneGame(id: string): void {

  }

}


// create new
// update exsisting
// delete by id
