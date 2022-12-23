import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './tittle/tittle.component';



@NgModule({
  declarations: [
    TittleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TittleComponent
  ]
 
})
export class HeaderModule { }
