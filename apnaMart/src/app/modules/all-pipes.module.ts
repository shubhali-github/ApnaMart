import { SqrtPipe } from '../pipes/sqrt.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SqrtPipe],
  imports: [
    CommonModule
  ],
  exports:[SqrtPipe]
})
export class AllPipesModule { }
