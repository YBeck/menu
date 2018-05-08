import { Component, OnInit, Inject, Input } from "@angular/core";
import { MenuService } from "../menu.service";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-diplay",
  templateUrl: "./diplay.component.html",
  styleUrls: ["./diplay.component.css"]
})
export class DiplayComponent implements OnInit {
  items;
  selectedItemId;
  ingredients;
  category;
  update: boolean = false;
  constructor(
    private menu: MenuService,
    private param: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = this.param.snapshot.params.id;
    const category = this.param.snapshot.params.category;
    if (id) {
      this.idSelected(id);
    } else if (category) {
      this.CategorySelected(category);
    }
  }

  idSelected(id) {
    this.menu.getItem(id).subscribe(res => {
      this.items = res;
      this.selectedItemId = id;
      this.displayIng();
    });
  }

  CategorySelected(category) {
    this.menu.getItems(category).subscribe(res => {
      this.items = res;
      this.category = category;
    });
  }

  displayIng() {
    if (this.items[0].ingredients) {
      const ing = this.items[0].ingredients;
      this.ingredients = ing.split(",");
    }
  }

  openDialog(item) {
    let dialogRef = this.dialog.open(DialogData, {
      data: item.name
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.menu.deleteItem(item._id).subscribe(() => {
          // update the UI
          this.CategorySelected(this.category);
        });
      }
    });
  }

  onUpdate() {
    this.update = true;
  }

  onUpdated() {
    // update the UI
    this.idSelected(this.selectedItemId);
    this.update = false;
  }
}

@Component({
  selector: "app-dialog",
  template: `
  <div>
    <h1 mat-dialog-title>Warning</h1>
    <h2 style="color:red;">Are yo sure you want to delete {{ data }} ?   </h2> 
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  </div>
  `
})
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
