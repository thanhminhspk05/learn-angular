import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainMenuComponent } from "./header/main-menu/main-menu.component";
import { TopMenuComponent } from "./header/top-menu/top-menu.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SearchComponent } from "./product-list/search/search.component";
import { TopHeaderComponent } from "./top-header/top-header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
