import { Component, OnInit } from '@angular/core';
import {
  MatNestedTreeNode,
  MatTree, MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodeToggle
} from "@angular/material/tree";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { NestedTreeControl } from "@angular/cdk/tree";
import { NoteNode } from "@features/notes/models/note-node";
import { NotesService } from "@features/notes/services/notes.service";

@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [
    MatTree,
    MatTreeNode,
    MatNestedTreeNode,
    MatIcon,
    MatButton,
    MatTreeNodeToggle,
    MatTreeNodeOutlet,
    MatTreeNodeDef
  ],
  templateUrl: './file-tree.component.html',
  styleUrl: './file-tree.component.scss'
})
export class FileTreeComponent implements OnInit {
  dataSource = new MatTreeNestedDataSource<NoteNode>();

  treeControl = new NestedTreeControl<NoteNode>(node => node.children);

  hasChildren = (_: number, node: NoteNode) => !!node.children && node.children.length > 0;

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notesService.notes$.subscribe(value => {
      this.dataSource.data = value;
    });
  }
}
