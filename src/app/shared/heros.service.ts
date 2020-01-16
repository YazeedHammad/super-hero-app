import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HerosService {
  constructor(private http: HttpClient) {}

  public getHero = (): Observable<any> => {
    return this.http.get(`https://akabab.github.io/superhero-api/api/all.json`);
  };

  // public getHero = (): Observable<any> => {
  //   return this.http.get(`https://superheroesgame.firebaseio.com/superheroesgame.json`);
  // }
}
