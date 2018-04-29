import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayComponent } from './diplay.component';

describe('DiplayComponent', () => {
  let component: DiplayComponent;
  let fixture: ComponentFixture<DiplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
