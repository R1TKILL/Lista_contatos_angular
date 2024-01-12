import { Component } from '@angular/core';
//interface
import { Animal } from 'src/app/interfaces/Animal';
//service
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent{

  //Quando há interface, lembre-se que é obrigatorio seguir seu contrato de impementação.
  /*animals: Animal[] = [
    {name: 'Turca', type: 'Dog', age: 4},
    {name: 'Tom', type: 'Cat', age: 6},
    {name: 'Frida', type: 'Bird', age: 2},
    {name: 'Bob', type: 'Horse', age: 8}
  ];*/

  animals: Animal[] = [];

  constructor(private listService: ListService){
    this.getAnimals();
  }

  /*removeAnimal(animal: Animal): void{
    this.animals = this.listService.remove(this.animals, animal);
  }*/

  removeAnimal(animal: Animal): void{
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  /*No angular eventos do tipo Observer são apenas observaveis, não se pode receber
  os seus dados para serem trabalhados, apenas quando concretizamos o evento com o 
  subscribe, dai podemos trabalhar os dados.*/
  getAnimals(){
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
  
}