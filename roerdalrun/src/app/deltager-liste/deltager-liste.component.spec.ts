import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagerListeComponent } from './deltager-liste.component';

describe('DeltagerListeComponent', () => {
  let component: DeltagerListeComponent;
  let fixture: ComponentFixture<DeltagerListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltagerListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
