import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgridComponent } from './kgrid.component';

describe('KgridComponent', () => {
  let component: KgridComponent;
  let fixture: ComponentFixture<KgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
