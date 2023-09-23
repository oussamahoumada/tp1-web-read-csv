import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materials = [
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }
