import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerAnnounceComponent } from './spinner-announce.component';

describe('SpinnerAnnounceComponent', () => {
  let component: SpinnerAnnounceComponent;
  let fixture: ComponentFixture<SpinnerAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerAnnounceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
