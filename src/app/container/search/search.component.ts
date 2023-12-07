import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  searchText: string = "";

  @Output()
  searchTextEmiter: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextEmitterChange() {
    this.searchTextEmiter.emit(this.searchText);
  }
}
