import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { LoginComponent } from './component/login/login.component';
import { ListusuarioComponent } from './component/listusuario/listusuario.component';
import { AddusuarioComponent } from './component/addusuario/addusuario.component';
import { ListlibroComponent } from './component/listlibro/listlibro.component';
import { EditlibroComponent } from './component/editlibro/editlibro.component';

const routes: Routes = [
  {    path: "listlibro", component:ListlibroComponent  },
  {    path: "editlibro", component:EditlibroComponent  },


  {    path: "listusuarios", component:ListusuarioComponent  },
  {    path: "addusuarios", component:AddusuarioComponent  },
  {    path: "menu", component:MenuComponent  },
  {    path: "principal", component: PrincipalComponent  },
  //{    path: "login", component: LoginComponent  },
  {    path: "", redirectTo: "principal", pathMatch: "full"  },
  {    path: "**", redirectTo: "principal", pathMatch: "full"  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
