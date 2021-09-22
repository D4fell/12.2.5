import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
