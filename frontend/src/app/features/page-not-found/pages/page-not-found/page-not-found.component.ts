import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    MatIcon
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
