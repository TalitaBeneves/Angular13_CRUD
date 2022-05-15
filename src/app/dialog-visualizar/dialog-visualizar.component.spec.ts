import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisualizarComponent } from './dialog-visualizar.component';

describe('DialogVisualizarComponent', () => {
  let component: DialogVisualizarComponent;
  let fixture: ComponentFixture<DialogVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
