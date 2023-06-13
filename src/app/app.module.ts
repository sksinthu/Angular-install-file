import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { HeaderComponent } from './header/header.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, WorksheetComponent, HeaderComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
