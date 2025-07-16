import { Component } from '@angular/core';
import { EditorActionsComponent } from "@features/notes/components/editor-actions/editor-actions.component";
import { FileTreeComponent } from "@features/notes/components/file-tree/file-tree.component";
import { EditorComponent } from "@features/notes/components/editor/editor.component";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    EditorActionsComponent,
    FileTreeComponent,
    EditorComponent,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
}
