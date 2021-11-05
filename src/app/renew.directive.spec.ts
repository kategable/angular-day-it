import { UserService } from './user.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RenewDirective } from './renew.directive';
import  'zone.js/testing'

 const ddd = '11/12/13';
 const result = 'Renew by 11/12/13 ';



class mockservice {
  needsRenew = true;
  async needsRenewFlag(): Promise<boolean> {
    return Promise.resolve(true);
  }
  get renewDate(): string | null {
    return ddd;
  }
}

@Component({
  template: `<span #container appRenew> </span>`,
})
class TestComponent {
  @ViewChild('container', { static: false }) container!: ElementRef;
}
describe('RenewDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [RenewDirective, TestComponent],
      providers: [{ provide: UserService, useClass: mockservice }],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  xit('should show test date', () => {
    //no async
    expect(component.container.nativeElement.textContent).toBe(result);
  });

  it('should show test date (waitForAsync)', waitForAsync(() => {

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.container.nativeElement.textContent).toBe(result);
    });
  }));

});


