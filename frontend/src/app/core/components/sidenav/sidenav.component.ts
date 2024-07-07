import {Component} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from "@angular/material/sidenav";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MatDivider} from "@angular/material/divider";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatIconButton,
    MatIcon,
    NgIf,
    MatSidenav,
    MatSidenavContent,
    ToolbarComponent,
    MatAnchor,
    MatDivider,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
}
