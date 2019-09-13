import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdkListComponent } from './list/list.component';
import { SimpleGuard } from '@delon/auth';
import { LayoutDefaultComponent } from '../../layout/default/default.component';

const routes: Routes = [
  {
    path: 'sdk',
    canActivate: [SimpleGuard],
    component: LayoutDefaultComponent,
    children: [
      { path: 'list', component: SdkListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdkRoutingModule { }
