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
    let url =
      this.baseUrl +
      "/base_visu/php/teile_data_service.php?service=get_teile_data&take=5000&skip=0&module=all&col_name=teilenr,teilebez_1,teilebez_2,nr_bez,teileart";
    return this.http.get<{ records: Teile[]; total: number }>(url);
  }
}
