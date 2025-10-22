import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AuthorService } from './service/author.service';
import { ListbooksComponent } from './component/listbooks/listbooks.component';
import { AddbooksComponent } from './component/addbooks/addbooks.component';
import { EditbooksComponent } from './component/editbooks/editbooks.component';
import { ListauthorsComponent } from './component/listauthors/listauthors.component';
import { AddauthorsComponent } from './component/addauthors/addauthors.component';
import { EditauthorsComponent } from './component/editauthors/editauthors.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListbooksComponent,
    AddbooksComponent,
    EditbooksComponent,
    ListauthorsComponent,
    AddauthorsComponent,
    EditauthorsComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
