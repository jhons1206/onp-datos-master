import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarialInformationComponent } from './actuarial-information.component';

describe('ActuarialInformationComponent', () => {
  let component: ActuarialInformationComponent;
  let fixture: ComponentFixture<ActuarialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuarialInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuarialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
