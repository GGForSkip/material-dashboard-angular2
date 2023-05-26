import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGarbageComponent } from './search-garbage.component';

describe('SearchGarbageComponent', () => {
  let component: SearchGarbageComponent;
  let fixture: ComponentFixture<SearchGarbageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGarbageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGarbageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
