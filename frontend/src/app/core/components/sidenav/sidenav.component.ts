import {Component, inject} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from "@angular/material/sidenav";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MatDivider} from "@angular/material/divider";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialogComponent} from "@core/components/logout-dialog/logout-dialog.component";

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
    RouterLinkActive,
    MatButton
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  readonly dialog = inject(MatDialog);

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }
}
