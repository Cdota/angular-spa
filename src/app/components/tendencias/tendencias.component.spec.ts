import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasComponent } from './tendencias.component';

describe('TendenciasComponent', () => {
  let component: TendenciasComponent;
  let fixture: ComponentFixture<TendenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
