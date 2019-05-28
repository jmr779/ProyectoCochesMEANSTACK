import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoAppComponent } from './logotipo-app.component';

describe('LogotipoAppComponent', () => {
  let component: LogotipoAppComponent;
  let fixture: ComponentFixture<LogotipoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotipoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotipoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
