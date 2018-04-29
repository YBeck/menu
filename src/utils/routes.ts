import { AddFoodItemComponent } from "../app/add-food-item/add-food-item.component";
import { HomeComponent } from "../app/home/home.component";
import { DiplayComponent } from "../app/diplay/diplay.component";

export const routes = [
  {
    path: "addItem",
    component: AddFoodItemComponent
  },
  {
    path: "displayItems",
    component: DiplayComponent
  },
  {
    path: "displayItems/:id",
    component: DiplayComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];
