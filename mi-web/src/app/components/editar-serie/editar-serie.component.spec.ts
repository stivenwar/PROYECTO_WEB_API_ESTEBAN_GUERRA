import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSerieComponent } from './editar-serie.component';

describe('EditarSerieComponent', () => {
  let component: EditarSerieComponent;
  let fixture: ComponentFixture<EditarSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
