import { Component, Inject } from '@angular/core';
import { AuthService, User} from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent {
  constructor(public auth: AuthService, 
    @Inject(DOCUMENT) private doc: Document) {}

    profile?: User | undefined | null;
  
  ngOnInit(): void {
      this.auth.user$.subscribe((profile) => {
        this.profile = profile;
    })
  }

  loginRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
}
