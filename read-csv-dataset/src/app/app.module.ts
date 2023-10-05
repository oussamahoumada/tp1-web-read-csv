import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartDialogComponent } from './components/chart-dialog/chart-dialog.component';
import { D3jsDataReaderComponent } from './components/d3js-data-reader/d3js-data-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDialogComponent,
    D3jsDataReaderComponent,
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
