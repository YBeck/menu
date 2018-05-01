import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MenuService {
  BASE_URL = "http://localhost:8081/api";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token",
      responseType: "text"
    })
  };

  constructor(private http: HttpClient) {}

  getItem(itemId) {
    return this.http.get(`${this.BASE_URL}/foodItem/${itemId}`);
  }

  getItems(category = "") {
    return this.http.get(`${this.BASE_URL}/foodItems/${category}`);
  }

  addItem(item) {
    return this.http.post(`${this.BASE_URL}/foodItems`, item, this.httpOptions);
  }
}
