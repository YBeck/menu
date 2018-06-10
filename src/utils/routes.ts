import { AddFoodItemComponent } from "../app/add-food-item/add-food-item.component";
import { HomeComponent } from "../app/home/home.component";
import { DiplayComponent } from "../app/diplay/diplay.component";
import { CategoriesComponent } from "../app/categories/categories.component";

export const routes = [
  {
    path: "addItem",
    component: AddFoodItemComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "displayItems/:category",
    component: DiplayComponent
  },
  {
    path: "displayItem/:id",
    component: DiplayComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];
