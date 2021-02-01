import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilComponent } from './facil.component';

describe('FacilComponent', () => {
  let component: FacilComponent;
  let fixture: ComponentFixture<FacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
