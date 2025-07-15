import { Component } from '@angular/core';
import {
  MatNestedTreeNode,
  MatTree, MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef, MatTreeNodeOutlet,
  MatTreeNodeToggle
} from "@angular/material/tree";
import { NoteNode } from "@features/notes/models/note-node";
import { MatButton, MatIconButton } from "@angular/material/button";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatIcon } from "@angular/material/icon";
import { MatCard } from "@angular/material/card";
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ViewMode } from "@features/notes/models/view-mode";
import { MatInput } from "@angular/material/input";
import { MarkdownComponent, provideMarkdown } from "ngx-markdown";
import { NgClass } from "@angular/common";
import { environment } from "@environments/environment";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    MatTree,
    MatTreeNode,
    MatTreeNodeDef,
    MatNestedTreeNode,
    MatTreeNodeToggle,
    MatIcon,
    MatTreeNodeOutlet,
    MatButton,
    MatCard,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconButton,
    ReactiveFormsModule,
    MatInput,
    MarkdownComponent,
    NgClass,
  ],
  providers: [provideMarkdown()],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  viewMode = new FormControl(ViewMode.SplitView);
  noteCode = new FormControl("");

  protected readonly ViewMode = ViewMode;

  protected readonly environment = environment;

  private readonly notes: NoteNode[] = [
    {
      fileName: "Rust",
      children: [
        { fileName: "Ownership" },
        { fileName: "Projects" },
      ]
    },
    {
      fileName: "OpSec",
      children: [
        { fileName: "Networking" },
        { fileName: "Active Directory" },
        { fileName: "Apache" },
        { fileName: "Penetration testing", children: [
            { fileName: "Penetration testing - scanning" },
            { fileName: "Penetration testing - enumeration" },
          ] }
      ]
    },
    {
      fileName: "Math",
      children: [
        { fileName: "Algebra 1" },
        { fileName: "Algebra 2" },
      ]
    },
    {
      fileName: "Unix vs Linux",
    },
    {
      fileName: "Soldering iron reviews",
    }
  ];

  dataSource = new MatTreeNestedDataSource<NoteNode>();

  treeControl = new NestedTreeControl<NoteNode>(node => node.children);

  hasChildren = (_: number, node: NoteNode) => !!node.children && node.children.length > 0;

  constructor() {
    this.dataSource.data = this.notes;
  }

  handleEditorKeydown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();

      const target = event.target as HTMLTextAreaElement;

      const noteCode
        = this.noteCode.value?.substring(0, target.selectionStart)
        + ' '.repeat(environment.tabLength)
        + this.noteCode.value?.substring(target.selectionEnd);

      const newCursorPosition = target.selectionStart + environment.tabLength;

      this.noteCode.setValue(noteCode);

      target.selectionStart = newCursorPosition;
      target.selectionEnd = newCursorPosition;
    }
  }
}
