import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRrhhComponent } from './editar-rrhh.component';

describe('EditarRrhhComponent', () => {
  let component: EditarRrhhComponent;
  let fixture: ComponentFixture<EditarRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
