import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosPrevisionalesComponent } from './estudios-previsionales.component';

describe('EstudiosPrevisionalesComponent', () => {
  let component: EstudiosPrevisionalesComponent;
  let fixture: ComponentFixture<EstudiosPrevisionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosPrevisionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosPrevisionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
