import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRrhhComponent } from './crear-rrhh.component';

describe('CrearRrhhComponent', () => {
  let component: CrearRrhhComponent;
  let fixture: ComponentFixture<CrearRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
