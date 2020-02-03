import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {HomeMenu} from './home-menu';
import {NbMenuModule} from '@nebular/theme';
import {AuthModule} from '../@auth/auth.module';
import { HeroComponent } from './hero/hero.component';

const HOME_COMPONENTS = [
  HomeComponent,
];

@NgModule({
  imports: [
    HomeRoutingModule,
    ThemeModule,
    // DashboardModule,
    // ECommerceModule,
    NbMenuModule,
    // MiscellaneousModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...HOME_COMPONENTS,
    HeroComponent,
  ],
  providers: [
    HomeMenu,
  ],
})
export class HomeModule {
}
