import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmarcaComponent } from './addmarca.component';

describe('AddmarcaComponent', () => {
  let component: AddmarcaComponent;
  let fixture: ComponentFixture<AddmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
