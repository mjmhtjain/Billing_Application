import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillHistoryComponent } from '../bill-history/bill-history.component';

const appRoutes : Routes = [
  {path : '', component : BillHistoryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
