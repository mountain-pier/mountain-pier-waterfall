import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SdkRoutingModule } from './sdk-routing.module';
import { SdkListComponent } from './list/list.component';

const COMPONENTS = [
  SdkListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    SdkRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SdkModule { }
