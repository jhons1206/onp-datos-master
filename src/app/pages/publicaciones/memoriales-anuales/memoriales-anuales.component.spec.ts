import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialesAnualesComponent } from './memoriales-anuales.component';

describe('MemorialesAnualesComponent', () => {
  let component: MemorialesAnualesComponent;
  let fixture: ComponentFixture<MemorialesAnualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorialesAnualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorialesAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
