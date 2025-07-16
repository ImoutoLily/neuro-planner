import { Component } from '@angular/core';
import { NotesActionsComponent } from "@features/notes/components/notes-actions/notes-actions.component";
import { NotesFileTreeComponent } from "@features/notes/components/notes-file-tree/notes-file-tree.component";
import { NotesEditorComponent } from "@features/notes/components/notes-editor/notes-editor.component";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    NotesActionsComponent,
    NotesFileTreeComponent,
    NotesEditorComponent,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
}
