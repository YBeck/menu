import { Component, OnInit, ViewChild } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuService } from "../menu.service";

@Component({
  selector: "app-add-food-item",
  templateUrl: "./add-food-item.component.html",
  styleUrls: ["./add-food-item.component.css"]
})
export class AddFoodItemComponent implements OnInit {
  @ViewChild("f") myform; //allows to rest form on submit without validation errors
  form: FormGroup;
  error: boolean = false;
  success: boolean = false;
  name: string;
  categories: string[] = ["Soups", "Main", "Sides", "Dessert", "Pastries"];

  constructor(private fb: FormBuilder, private menuService: MenuService) {
    this.form = fb.group({
      name: ["", Validators.required],
      ingredients: ["", Validators.required],
      directions: ["", Validators.required],
      categories: ["", Validators.required]
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.error = false;
      this.menuService
        .addItem(JSON.stringify(this.form.value))
        .subscribe(res => {
          this.name = this.form.value.name;
          this.success = true;
          this.myform.resetForm();
        });
    } else {
      this.error = true;
    }
  }

  ngOnInit() {}
}
