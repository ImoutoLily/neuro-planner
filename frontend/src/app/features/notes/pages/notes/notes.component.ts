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
import { MarkdownComponent, provideMarkdown } from "ngx-markdown";
import { NgClass } from "@angular/common";
import { environment } from "@environments/environment";
import Prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';

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

  dataSource = new MatTreeNestedDataSource<NoteNode>();

  treeControl = new NestedTreeControl<NoteNode>(node => node.children);

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

  private readonly selectionWrapSymbols = new Set(["*", "~"]);
  private readonly alwaysWrapSymbols = new Set(["`", "'", "\""]);
  private readonly asymmetricWrapSymbols: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  private readonly asymmetricWrapSymbolKeys = new Set(Object.keys(this.asymmetricWrapSymbols));

  constructor() {
    Prism.plugins['autoloader'].languages_path = '/assets/prismjs/';
    this.dataSource.data = this.notes;
  }

  hasChildren = (_: number, node: NoteNode) => !!node.children && node.children.length > 0;

  handleEditorKeydown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      this.handleTab(event);
    } else if (this.selectionWrapSymbols.has(event.key)) {
      this.handlePairSymbol(event, true);
    } else if (this.alwaysWrapSymbols.has(event.key) || this.asymmetricWrapSymbolKeys.has(event.key)) {
      this.handlePairSymbol(event);
    }
  }

  private handleTab(event: KeyboardEvent) {
    event.preventDefault();

    const target = event.target as HTMLTextAreaElement;

    const tabs = ' '.repeat(environment.tabLength);

    const newCursorPosition = target.selectionStart + environment.tabLength;

    // Yes, this is deprecated, but there currently is no other way to maintain the undo / redo stack
    // when updating an element from JS/TS
    // noinspection JSDeprecatedSymbols
    document.execCommand("insertText", false, tabs);

    target.setSelectionRange(newCursorPosition, newCursorPosition);
  }

  private handlePairSymbol(event: KeyboardEvent, onlyWrap = false) {
    const target = event.target as HTMLTextAreaElement;

    if (onlyWrap && target.selectionStart == target.selectionEnd) return;

    event.preventDefault();

    const selectionReplacement
      = event.key
      + this.noteCode.value?.substring(target.selectionStart, target.selectionEnd)
      + (this.asymmetricWrapSymbols[event.key] ?? event.key);

    const newSelectionStart = target.selectionStart + 1;
    const newSelectionEnd = target.selectionEnd + 1;

    // Yes, this is deprecated, but there currently is no other way to maintain the undo / redo stack
    // when updating an element from JS/TS
    // noinspection JSDeprecatedSymbols
    document.execCommand("insertText", false, selectionReplacement);

    target.setSelectionRange(newSelectionStart, newSelectionEnd);
  }
}
