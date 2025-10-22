import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauthorsComponent } from './listauthors.component';

describe('ListauthorsComponent', () => {
  let component: ListauthorsComponent;
  let fixture: ComponentFixture<ListauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListauthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
