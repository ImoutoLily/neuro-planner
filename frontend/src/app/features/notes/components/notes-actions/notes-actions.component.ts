import { Component, OnInit } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { ViewMode } from "@features/notes/models/view-mode";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { NotesService } from "@features/notes/services/notes.service";

@Component({
  selector: 'app-notes-actions',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup,
    MatIcon,
    MatIconButton,
    ReactiveFormsModule
  ],
  templateUrl: './notes-actions.component.html',
  styleUrl: './notes-actions.component.scss'
})
export class NotesActionsComponent implements OnInit {
  viewMode = new FormControl(ViewMode.SplitView);

  protected readonly ViewMode = ViewMode;

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.viewMode$.subscribe(value => {
      this.viewMode.setValue(value, { emitEvent: false });
    });

    this.viewMode.valueChanges.subscribe(value => {
      this.notesService.setViewMode(value ?? ViewMode.SplitView);
    })
  }
}
