import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCardComponent } from './pages/page-card/page-card.component';

const routes: Routes = [
  {path: '', component:PageCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
