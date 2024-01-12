import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//for two-way-binding
import { FormsModule } from '@angular/forms';

//for requires Http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventComponentComponent } from './components/event-component/event-component.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { NodeProductsComponent } from './components/node-products/node-products.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetaildingComponent } from './components/item-detailding/item-detailding.component';
import { from } from 'rxjs';
import { EditRouteComponent } from './components/edit-route/edit-route.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventComponentComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    NodeProductsComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ItemDetaildingComponent,
    EditRouteComponent,
    CreateRouteComponent
  ],
  //Importando o AppRoutingModule para poder usar o angular routes e FormsModule para formulários.
  //Importando o HttpClientModule para poder realizar requisões Http.
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
