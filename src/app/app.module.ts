import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleComponent } from './rule/rule.component';
import { HttpClientModule } from '@angular/common/http';
import { OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule, ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule } from 'ng-boosted';
 import { FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    RuleComponent
  ],
  imports: [
    OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule, ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

