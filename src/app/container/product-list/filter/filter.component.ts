import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButton = "all";

  onSelectedRadioButtonChange() {
    this.selectedRadioButtonChange.emit(this.selectedRadioButton);
  }
}
