import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { ListauthorsComponent } from './component/listauthors/listauthors.component';
import { AddauthorsComponent } from './component/addauthors/addauthors.component';
import { EditauthorsComponent } from './component/editauthors/editauthors.component';
import { ListbooksComponent } from './component/listbooks/listbooks.component';
import { AddbooksComponent } from './component/addbooks/addbooks.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { EditbooksComponent } from './component/editbooks/editbooks.component';

const routes: Routes = [
  {
    path:"listauthors", component: ListauthorsComponent
  },
  {
    path: "addauthors", component: AddauthorsComponent
  },
  {
    path: "editauthors", component: EditauthorsComponent
  },
  {
    path: "menu", component:MenuComponent
  },
  {
    path: "listbooks", component: ListbooksComponent
  },
  {
    path: "addbooks", component: AddbooksComponent
  },
  {
    path: "editbooks", component: EditbooksComponent
  },
  {
    path: "principal", component: PrincipalComponent
  },
  {
    path: "", redirectTo: "principal", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "principal", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
