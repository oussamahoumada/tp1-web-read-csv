import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { D3jsDataReaderComponent } from './components/d3js-data-reader/d3js-data-reader.component';
import { ChartDialogComponent } from './components/chart-dialog/chart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    D3jsDataReaderComponent,
    ChartDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
