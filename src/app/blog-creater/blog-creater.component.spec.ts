import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreaterComponent } from './blog-creater.component';

describe('BlogCreaterComponent', () => {
  let component: BlogCreaterComponent;
  let fixture: ComponentFixture<BlogCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCreaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
