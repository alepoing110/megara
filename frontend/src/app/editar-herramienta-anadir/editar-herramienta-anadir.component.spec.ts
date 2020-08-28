import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHerramientaAnadirComponent } from './editar-herramienta-anadir.component';

describe('EditarHerramientaAnadirComponent', () => {
  let component: EditarHerramientaAnadirComponent;
  let fixture: ComponentFixture<EditarHerramientaAnadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHerramientaAnadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHerramientaAnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
