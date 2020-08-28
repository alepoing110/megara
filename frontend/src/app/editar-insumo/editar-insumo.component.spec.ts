import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInsumoComponent } from './editar-insumo.component';

describe('EditarInsumoComponent', () => {
  let component: EditarInsumoComponent;
  let fixture: ComponentFixture<EditarInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
