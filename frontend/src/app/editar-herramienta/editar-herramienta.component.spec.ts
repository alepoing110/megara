import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHerramientaComponent } from './editar-herramienta.component';

describe('EditarHerramientaComponent', () => {
  let component: EditarHerramientaComponent;
  let fixture: ComponentFixture<EditarHerramientaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHerramientaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
