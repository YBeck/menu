import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AddFoodItemComponent } from "./add-food-item/add-food-item.component";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { routes } from "../utils/routes";
import { MenuService } from "./menu.service";
import { DiplayComponent } from "./diplay/diplay.component";
import { DialogData } from "./diplay/diplay.component";
import { CategoriesComponent } from "./categories/categories.component";
import { MatGridListModule } from "@angular/material/grid-list";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AddFoodItemComponent,
    HomeComponent,
    DiplayComponent,
    CategoriesComponent,
    DialogData
  ],
  entryComponents: [DialogData],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    MenuService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
