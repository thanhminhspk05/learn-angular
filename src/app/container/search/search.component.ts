import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  searchText: string = "";

  @Output()
  searchTextEmiter: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("searchInput") searchInputEl: ElementRef;
  setSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextEmiter.emit(this.searchText);
  }
}
