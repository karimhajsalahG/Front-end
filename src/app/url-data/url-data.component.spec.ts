import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDataComponent } from './url-data.component';

describe('UrlDataComponent', () => {
  let component: UrlDataComponent;
  let fixture: ComponentFixture<UrlDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
