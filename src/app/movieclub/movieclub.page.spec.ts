import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieclubPage } from './movieclub.page';

describe('MovieclubPage', () => {
  let component: MovieclubPage;
  let fixture: ComponentFixture<MovieclubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieclubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieclubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
