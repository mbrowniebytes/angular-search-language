import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLanguagesComponent } from './search-languages.component';

describe('SearchLanguagesComponent', () => {
  let component: SearchLanguagesComponent;
  let fixture: ComponentFixture<SearchLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
