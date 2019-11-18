import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule
} from "@angular/material";

@NgModule({
        declarations: [],
        exports: [
                CommonModule,
                MatInputModule,
                MatPaginatorModule,
                MatProgressSpinnerModule,
                MatSortModule,
                MatTableModule,
                MatIconModule,
                MatButtonModule,
                MatCardModule,
                MatFormFieldModule
        ]
})
export class AngularMaterial { }
