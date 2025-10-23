import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmarcaComponent } from './listmarca.component';

describe('ListmarcaComponent', () => {
  let component: ListmarcaComponent;
  let fixture: ComponentFixture<ListmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListmarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
