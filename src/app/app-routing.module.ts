import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationsComponent } from './layout/components/quotations/quotations.component';

const routes: Routes = [
  { path: 'quotation', component: QuotationsComponent },
  { path: '**', redirectTo: 'quotation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
