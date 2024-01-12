import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/ContactModels/Contacts';
import { ContactsInterface } from 'src/app/ContactModels/ContactsInterface';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent {

  contact!: ContactsInterface;
  fileIMGB64: any = '';
  objNewDates = new Contacts();

  constructor(private productsService: ProductsServiceService, private dynamicRoute: ActivatedRoute, private route: Router){
    this.getContact();
  };

  getContact(){
    const id = Number(this.dynamicRoute.snapshot.paramMap.get("id"));
    this.productsService.getIdContact(id).subscribe((contact) => (this.contact = contact));
  };

  selectUpdateIMG(){
    const file: HTMLElement | null = document.getElementById("fileIMG");
    file?.click();

    if ( file instanceof HTMLInputElement) {
      
      file.addEventListener('change', () => {

        if(file.files?.length! > 0){
          file.innerHTML = '';
        }

        const arqu = file.files![0];

        if(arqu){

          const reader = new FileReader();

          reader.addEventListener('load', (e) => {
            const readerTarget = e.target;
            this.fileIMGB64 = readerTarget?.result;
          });
          
          reader.readAsDataURL(arqu);

        }else{
          return;
        }
      });
    };
  }

  updateContact(): void{
    const inputNome:HTMLElement | null = document.querySelector("#inputNome");
    const inputNumero:HTMLElement | null = document.querySelector("#inputNumero");

    if(inputNome instanceof HTMLInputElement && inputNumero instanceof HTMLInputElement){
      this.objNewDates = {
        id: this.contact.id,
        perfil: this.contact.perfil,
        nome: inputNome.value,
        numero: inputNumero.value
      };

      this.productsService.UpdateDatesClient(this.objNewDates).subscribe();
      this.route.navigate(['']);
    };
  };

  deleteContact(): void{
    const id = Number(this.dynamicRoute.snapshot.paramMap.get("id"));
    this.productsService.DeleteClientID(id).subscribe();
    this.route.navigate(['']);
  }

}
