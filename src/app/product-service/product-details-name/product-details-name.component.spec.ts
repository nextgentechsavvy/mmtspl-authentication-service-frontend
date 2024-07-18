import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsNameComponent } from './product-details-name.component';

describe('ProductDetailsNameComponent', () => {
  let component: ProductDetailsNameComponent;
  let fixture: ComponentFixture<ProductDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
