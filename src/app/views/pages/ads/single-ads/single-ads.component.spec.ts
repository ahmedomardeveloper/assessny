import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdsComponent } from './single-ads.component';

describe('SingleAdsComponent', () => {
  let component: SingleAdsComponent;
  let fixture: ComponentFixture<SingleAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
