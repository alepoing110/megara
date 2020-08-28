import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInsumoAnadirComponent } from './editar-insumo-anadir.component';

describe('EditarInsumoAnadirComponent', () => {
  let component: EditarInsumoAnadirComponent;
  let fixture: ComponentFixture<EditarInsumoAnadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInsumoAnadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInsumoAnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
