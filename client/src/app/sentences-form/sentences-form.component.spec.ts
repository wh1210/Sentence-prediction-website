import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesFormComponent } from './sentences-form.component';

describe('SentencesFormComponent', () => {
  let component: SentencesFormComponent;
  let fixture: ComponentFixture<SentencesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
