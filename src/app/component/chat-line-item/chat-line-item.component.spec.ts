import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLineItemComponent } from './chat-line-item.component';

describe('ChatLineItemComponent', () => {
  let component: ChatLineItemComponent;
  let fixture: ComponentFixture<ChatLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
