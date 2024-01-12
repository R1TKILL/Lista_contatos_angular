import { Component } from '@angular/core';
import { Contacts } from 'src/app/ContactModels/Contacts';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent {

  objContact = new Contacts();
  fileIMGB64: any = '';
  nome!: string; 
  numero!: string; 

  constructor(private productsService: ProductsServiceService, private route: Router){}

  selectIMG(): void{
    const file: HTMLElement | null = document.getElementById("fileIMG");
    file?.click();

    //Tem que tratar assim no TS pois como ele não sabe o que vem, garantimos não ser nulo.
    if ( file instanceof HTMLInputElement) {
      
      file.addEventListener('change', () => {

        if(file.files?.length! <= 0){
          file.innerHTML = '';
          return;
        }

        const arqu = file.files![0];

        if(arqu){

          const reader = new FileReader();

          reader.addEventListener('load', (e) => {
            const readerTarget = e.target;
            //This way there is a gain as base64.
            this.fileIMGB64 = readerTarget?.result;
          });
          
          reader.readAsDataURL(arqu);

        }else{
          return;
        }
      });
    };
  };

  createContact():void{
    this.objContact = {perfil: this.fileIMGB64, nome: this.nome, numero: this.numero};
    this.productsService.insertClient(this.objContact).subscribe();
    this.route.navigate(['']);
  }

};