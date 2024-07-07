import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/pages/home/home.component";
import {TodoComponent} from "./features/todo/pages/todo/todo.component";
import {NotesComponent} from "./features/notes/pages/notes/notes.component";
import {ScheduleComponent} from "./features/schedule/pages/schedule/schedule.component";
import {LoginComponent} from "./features/login/pages/login/login.component";
import {RegisterComponent} from "./features/register/pages/register/register.component";
import {PageNotFoundComponent} from "./features/page-not-found/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "todo", component: TodoComponent },
  { path: "notes", component: NotesComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
