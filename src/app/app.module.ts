import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewListComponent,
    BoardComponent,
    ListComponent,
    ShowListsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
