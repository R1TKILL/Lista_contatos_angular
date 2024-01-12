import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetaildingComponent } from './item-detailding.component';

describe('ItemDetaildingComponent', () => {
  let component: ItemDetaildingComponent;
  let fixture: ComponentFixture<ItemDetaildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetaildingComponent]
    });
    fixture = TestBed.createComponent(ItemDetaildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
