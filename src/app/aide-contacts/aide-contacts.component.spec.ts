import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideContactsComponent } from './aide-contacts.component';

describe('AideContactsComponent', () => {
  let component: AideContactsComponent;
  let fixture: ComponentFixture<AideContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AideContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AideContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
