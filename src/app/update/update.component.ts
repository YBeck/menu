import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuService } from "../menu.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  @Input() item;
  @Output() onUpdated = new EventEmitter<boolean>();
  form: FormGroup;
  error: boolean = false;
  success: boolean = false;
  name: string;
  updateTarget: string;
  categories: string[] = ["Soups", "Main", "Sides", "Dessert", "Pastries"];
  properties: string[] = ["name", "category", "ingredients", "directions"];

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  onSubmit() {
    const updated = Object.assign(this.form.value);
    if (this.form.valid) {
      for (const key in updated) {
        if (updated.hasOwnProperty(key)) {
          if (Object.is(updated[key], this.item[key])) {
            delete updated[key];
          }
        }
      }
      this.menuService.updateItem(this.item._id, updated).subscribe(res => {
        this.onUpdated.emit(true);
      });
    }
  }

  onClick(property) {
    console.log(property);
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: [this.item.name, Validators.required],
      ingredients: [this.item.ingredients, Validators.required],
      directions: [this.item.directions, Validators.required],
      categories: [this.item.categories, Validators.required]
    });
  }
}
