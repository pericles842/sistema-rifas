import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRifasComponent } from './web-rifas.component';

describe('WebRifasComponent', () => {
  let component: WebRifasComponent;
  let fixture: ComponentFixture<WebRifasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebRifasComponent]
    });
    fixture = TestBed.createComponent(WebRifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
