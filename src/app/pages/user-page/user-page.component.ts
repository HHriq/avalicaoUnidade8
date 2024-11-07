import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {
  profile?: User | undefined | null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    })
  }
}
