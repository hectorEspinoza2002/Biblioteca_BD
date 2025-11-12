import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusuariopersonalComponent } from './listusuariopersonal.component';

describe('ListusuariopersonalComponent', () => {
  let component: ListusuariopersonalComponent;
  let fixture: ComponentFixture<ListusuariopersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListusuariopersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusuariopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
