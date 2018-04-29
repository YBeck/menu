import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MenuService {
  BASE_URL = "http://localhost:8081/api";

  constructor(private http: HttpClient) {}

  getItems(item = "") {
    return this.http.get(`${this.BASE_URL}/foodItems/${item}`);
  }
}
