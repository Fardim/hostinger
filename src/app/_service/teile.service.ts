import { Teile } from "./../_models/teile";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TeileService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTeile() {
    return this.http.get<Teile[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
  }
}
