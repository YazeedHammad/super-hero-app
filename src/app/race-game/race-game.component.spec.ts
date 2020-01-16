import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceGameComponent } from './race-game.component';

describe('RaceGameComponent', () => {
  let component: RaceGameComponent;
  let fixture: ComponentFixture<RaceGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
