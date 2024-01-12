import { Component } from '@angular/core';
import { Contacts } from 'src/app/ContactModels/Contacts';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-node-products',
  templateUrl: './node-products.component.html',
  styleUrls: ['./node-products.component.css']
})
export class NodeProductsComponent {
    
  contacts: Contacts[] = [];

  constructor(private productsService: ProductsServiceService){
    this.getContacts();
  };

  getContacts(): void{
    this.productsService.getAllContacts().subscribe((contact) => (this.contacts = contact));
  };

};
