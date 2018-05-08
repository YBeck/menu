import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-checkbox",
  templateUrl: "./update-checkbox.component.html",
  styleUrls: ["./update-checkbox.component.css"]
})
export class UpdateCheckboxComponent implements OnInit {
  @Input() item;
  categories: string[] = ["Soups", "Main", "Sides", "Dessert", "Pastries"];
  properties: string[] = ["name", "category", "ingredients", "directions"];
  // update = "";
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigateByUrl("displayItem/: id"); // TODO FIX
  }

  onSubmit(form, e) {
    e.preventDefault();
    console.log("e ", e.target);
    console.log("form ", form);
  }
}
