import { Component, OnInit } from "@angular/core";
import { MenuService } from "../menu.service";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-diplay",
  templateUrl: "./diplay.component.html",
  styleUrls: ["./diplay.component.css"]
})
export class DiplayComponent implements OnInit {
  items;
  ingredients;
  constructor(private menu: MenuService, private param: ActivatedRoute) {}

  ngOnInit() {
    const id = this.param.snapshot.params.id;
    const category = this.param.snapshot.params.category;
    if (id) {
      this.menu.getItem(id).subscribe(res => {
        this.items = res;
        this.dislayIng();
      });
    } else if (category) {
      this.menu.getItems(category).subscribe(res => {
        this.items = res;
      });
    }
  }

  dislayIng() {
    if (this.items[0].ingredients) {
      const ing = this.items[0].ingredients;
      this.ingredients = ing.split(",");
    }
  }
}
