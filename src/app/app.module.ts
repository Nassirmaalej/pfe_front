import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleComponent } from './rule/rule.component';
import { HttpClientModule } from '@angular/common/http';
import { OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule, ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule } from 'ng-boosted';
import { FormsModule } from "@angular/forms";
import { StatComponent } from './stat/stat.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/material';
import { MatTabsModule, MatTableModule, MatSortModule, MatSliderModule, MatProgressSpinnerModule, MatRadioModule, MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    RuleComponent,
    StatComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule, ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, BrowserAnimationsModule, MatAutocompleteModule, MatBadgeModule, MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule,
    MatSelectModule,
    MatSliderModule, MatSortModule, MatTableModule, MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

