import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRouteComponent } from './create-route.component';

describe('CreateRouteComponent', () => {
  let component: CreateRouteComponent;
  let fixture: ComponentFixture<CreateRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRouteComponent]
    });
    fixture = TestBed.createComponent(CreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
