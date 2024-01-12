import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeProductsComponent } from './node-products.component';

describe('NodeProductsComponent', () => {
  let component: NodeProductsComponent;
  let fixture: ComponentFixture<NodeProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeProductsComponent]
    });
    fixture = TestBed.createComponent(NodeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
