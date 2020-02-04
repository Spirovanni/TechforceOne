/** ****************************************************************************
 * app.component.ts Copyright ©️ 2020 by the HabitRabbit developers (ardianq, lachchri16, sweiland, YellowIcicle).
 ******************************************************************************/

import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {ProfilePictureService} from './service/profile-picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  isLoggedIn = false;

  constructor(private userService: UserService, private profilePictureService: ProfilePictureService) {
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
