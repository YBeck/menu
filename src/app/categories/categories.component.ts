import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: {}[] = [
    { name: "Soups", url: "../../assets/images/soup.jpg" },
    { name: "Main", url: "../../assets/images/main.png" },
    { name: "Sides", url: "../../assets/images/side.png" },
    { name: "Dessert", url: "../../assets/images/dessert.jpg" },
    { name: "Pastries", url: "../../assets/images/pastries.jpg" }
  ];

  constructor() {}

  ngOnInit() {}
}
