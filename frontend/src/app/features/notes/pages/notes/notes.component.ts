import { Component } from '@angular/core';
import { ActionsComponent } from "@features/notes/components/actions/actions.component";
import { FileTreeComponent } from "@features/notes/components/file-tree/file-tree.component";
import { EditorComponent } from "@features/notes/components/editor/editor.component";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    ActionsComponent,
    FileTreeComponent,
    EditorComponent,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  constructor() {

  }
}
