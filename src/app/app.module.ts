import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { DataManagerService } from './data-manager.service';
import { FormsModule } from '@angular/forms';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, ShowListsComponent, AddNewListComponent, ListComponent, TaskComponent, ExtraInfoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
