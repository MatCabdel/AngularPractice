import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest3Component } from './quest-3.component';

describe('Quest3Component', () => {
  let component: Quest3Component;
  let fixture: ComponentFixture<Quest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quest3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
