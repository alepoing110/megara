import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOtComponent } from './editar-ot.component';

describe('EditarOtComponent', () => {
  let component: EditarOtComponent;
  let fixture: ComponentFixture<EditarOtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
