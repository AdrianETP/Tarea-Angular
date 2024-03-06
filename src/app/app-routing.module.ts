import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindComponent } from './tailwind/tailwind.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routes: Routes = [
  {
    path: "tailwind",
    component: TailwindComponent
  },
  {
    path: "bootstrap",
    component: BootstrapComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
