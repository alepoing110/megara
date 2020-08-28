import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFichaComponent } from './editar-ficha.component';

describe('EditarFichaComponent', () => {
  let component: EditarFichaComponent;
  let fixture: ComponentFixture<EditarFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
