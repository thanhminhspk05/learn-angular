import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { SearchComponent } from "./container/search/search.component";
import { HeaderComponent } from "./header/header.component";
import { MainMenuComponent } from "./header/main-menu/main-menu.component";
import { TopMenuComponent } from "./header/top-menu/top-menu.component";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
