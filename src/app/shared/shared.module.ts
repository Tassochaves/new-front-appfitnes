import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComponentsPrimeNg } from '../primeNgComponents/ComponentsPrimeNg';
import { InputPrincipalComponent } from '../components/inputs/input-principal/input-principal.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsPrimeNg,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    InputPrincipalComponent,
  ],
  exports:[
    CommonModule,
    ComponentsPrimeNg,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    InputPrincipalComponent,
  ]
})
export class SharedModule { }
