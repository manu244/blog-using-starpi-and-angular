import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleViewComponent } from './blog-single-view.component';

describe('BlogSingleViewComponent', () => {
  let component: BlogSingleViewComponent;
  let fixture: ComponentFixture<BlogSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
