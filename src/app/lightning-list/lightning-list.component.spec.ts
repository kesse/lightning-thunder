import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningListComponent } from './lightning-list.component';
import { MatListModule } from '@angular/material/list';

describe('LightningListComponent', () => {
  let component: LightningListComponent;
  let fixture: ComponentFixture<LightningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningListComponent ],
      imports: [ MatListModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
