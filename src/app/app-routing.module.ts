import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetaildingComponent } from './components/item-detailding/item-detailding.component';
import { NodeProductsComponent } from './components/node-products/node-products.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { EditRouteComponent } from './components/edit-route/edit-route.component';

//Definindo o caminho e o que redeniza.
const routes: Routes = [
  {path: '', component: NodeProductsComponent},
  {path: 'create', component: CreateRouteComponent},
  {path: 'list/:id', component: EditRouteComponent}

  //Dos meus testes.
  /*{path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetaildingComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
