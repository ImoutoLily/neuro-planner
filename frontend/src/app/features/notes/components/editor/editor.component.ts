import { Component, OnInit } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from "ngx-markdown";
import { MatCard } from "@angular/material/card";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ViewMode } from "@features/notes/models/view-mode";
import { NgClass } from "@angular/common";
import { NotesService } from "@features/notes/services/notes.service";
import { environment } from "@environments/environment";
import Prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader.js';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    MarkdownComponent,
    MatCard,
    ReactiveFormsModule,
    NgClass
  ],
  providers: [provideMarkdown()],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  viewMode = ViewMode.SplitView;
  noteCode = new FormControl("");

  protected readonly ViewMode = ViewMode;

  private readonly selectionWrapSymbols = new Set(["*", "~"]);
  private readonly alwaysWrapSymbols = new Set(["`", "'", "\""]);
  private readonly asymmetricWrapSymbols: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  private readonly asymmetricWrapSymbolKeys = new Set(Object.keys(this.asymmetricWrapSymbols));

  constructor(private notesService: NotesService) {
    Prism.plugins['autoloader'].languages_path = '/assets/prismjs/';
  }

  ngOnInit(): void {
    this.notesService.viewMode$.subscribe(value => {
      this.viewMode = value;
    });
  }

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
