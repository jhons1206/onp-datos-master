import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesInstitucionalesComponent } from './informes-institucionales.component';

describe('InformesInstitucionalesComponent', () => {
  let component: InformesInstitucionalesComponent;
  let fixture: ComponentFixture<InformesInstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesInstitucionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
