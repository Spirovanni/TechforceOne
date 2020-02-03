import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import {} from './home-routing.module'

const HOME_COMPONENTS = [
  HomeComponent,
];

@NgModule({
  imports: [
    // PagesRoutingModule,
    // ThemeModule,
    // DashboardModule,
    // ECommerceModule,
    // NbMenuModule,
    // MiscellaneousModule,
    // AuthModule.forRoot(),
  ],
  declarations: [
    ...HOME_COMPONENTS,
  ],
  providers: [
    PagesMenu,
  ],
})
export class HomeModule {
}
