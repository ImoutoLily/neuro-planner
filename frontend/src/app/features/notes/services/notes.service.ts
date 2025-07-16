import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { NoteNode } from "@features/notes/models/note-node";
import { ViewMode } from "@features/notes/models/view-mode";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes = new BehaviorSubject<NoteNode[]>([
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
  ]);
  private selectedNote = new BehaviorSubject<NoteNode | null>(null);
  private viewMode = new BehaviorSubject<ViewMode>(ViewMode.SplitView);

  notes$ = this.notes.asObservable();
  selectedNote$ = this.selectedNote.asObservable();
  viewMode$ = this.viewMode.asObservable();

  constructor() { }

  setViewMode(viewMode: ViewMode) {
    this.viewMode.next(viewMode);
  }
}
