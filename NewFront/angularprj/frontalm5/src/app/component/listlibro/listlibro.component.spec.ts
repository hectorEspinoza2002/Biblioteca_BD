import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlibroComponent } from './listlibro.component';

describe('ListlibroComponent', () => {
  let component: ListlibroComponent;
  let fixture: ComponentFixture<ListlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListlibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
