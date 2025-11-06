import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoEstudianteComponent } from './prestamo-estudiante.component';

describe('PrestamoEstudianteComponent', () => {
  let component: PrestamoEstudianteComponent;
  let fixture: ComponentFixture<PrestamoEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamoEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
