import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguraComponent } from './asegura.component';

describe('AseguraComponent', () => {
  let component: AseguraComponent;
  let fixture: ComponentFixture<AseguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseguraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
