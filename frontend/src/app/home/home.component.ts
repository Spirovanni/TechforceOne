import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbTokenService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { HomeMenu } from './home-menu';
import { InitUserService } from '../@theme/services/init-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  menu: NbMenuItem[];
  alive = true;

  constructor(
    private homeMenu: HomeMenu,
    private tokenService: NbTokenService,
    protected initUserService: InitUserService,
  ) {
    this.initMenu();

    this.tokenService.tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
      });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  initMenu() {
    this.homeMenu.getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
      });
  }
  ngOnDestroy(): void {
    this.alive = false;
  }
}
