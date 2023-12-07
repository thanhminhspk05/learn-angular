import { Component, Input } from "@angular/core";

type TProduct = {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
};

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  @Input() product = {} as TProduct;
}
