import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Producto/listar/listar.component';
import { AddComponent } from './Producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';


const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path: 'add', component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
