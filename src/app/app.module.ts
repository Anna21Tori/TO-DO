import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { registerLocaleData } from "@angular/common";

import localePl from "@angular/common/locales/pl";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ListComponent, FormComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
