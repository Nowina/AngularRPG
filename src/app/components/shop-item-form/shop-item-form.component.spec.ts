import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemFormComponent } from './shop-item-form.component';

describe('ShopItemFormComponent', () => {
  let component: ShopItemFormComponent;
  let fixture: ComponentFixture<ShopItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
