import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductIdComponent } from './update-product-id.component';

describe('UpdateProductIdComponent', () => {
  let component: UpdateProductIdComponent;
  let fixture: ComponentFixture<UpdateProductIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
