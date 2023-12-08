import { Component } from "@angular/core";
import { Product } from "../Models/Product";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent {
  searchText: string = "";
  selectedProduct: Product;

  onChangeSearchText(value: string) {
    this.searchText = value;
  }

  getSelectedProductValue(value: Product) {
    this.selectedProduct = value;
  }
}
