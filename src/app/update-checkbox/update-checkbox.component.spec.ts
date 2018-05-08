import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCheckboxComponent } from './update-checkbox.component';

describe('UpdateCheckboxComponent', () => {
  let component: UpdateCheckboxComponent;
  let fixture: ComponentFixture<UpdateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
