import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryManagementComponent } from './product-category-management.component';

describe('ProductCategoryManagementComponent', () => {
  let component: ProductCategoryManagementComponent;
  let fixture: ComponentFixture<ProductCategoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
