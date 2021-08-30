import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContentsComponent } from './home-page-contents.component';

describe('HomePageContentsComponent', () => {
  let component: HomePageContentsComponent;
  let fixture: ComponentFixture<HomePageContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
