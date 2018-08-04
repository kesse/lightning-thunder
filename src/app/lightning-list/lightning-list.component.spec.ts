import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningListComponent } from './lightning-list.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatDialogRef } from '@angular/material/dialog';

describe('LightningListComponent', () => {
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  let component: LightningListComponent;
  let fixture: ComponentFixture<LightningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningListComponent ],
      imports: [ MaterialDesignModule ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
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
