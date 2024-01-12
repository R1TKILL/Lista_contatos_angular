import { Component } from '@angular/core';

//Pegar os parametros na url
import { ActivatedRoute } from '@angular/router';
//interface
import { Animal } from 'src/app/interfaces/Animal';
//service
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detailding',
  templateUrl: './item-detailding.component.html',
  styleUrls: ['./item-detailding.component.css']
})
export class ItemDetaildingComponent {

  //ou  o ?
  animal!: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal();
  }

  getAnimal(){
    //Obtendo o id e convertando para numero.
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
