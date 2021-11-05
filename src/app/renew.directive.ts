import { UserService } from './user.service';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenew]',
})
export class RenewDirective  implements OnInit{
  constructor(private readonly el:ElementRef,private readonly renderer:Renderer2, private readonly userservice: UserService) {

  }
  @HostBinding('style.backgroundColor') c_colorrr = "red";

  @HostListener('mouseenter') c_onEnterrr() {
    this.c_colorrr= "blue" ;
  }

  @HostListener('mouseleave') c_onLeaveee() {
   this.c_colorrr = "red" ;
  }
  async ngOnInit(): Promise<void> {
    if (await this.userservice.needsRenewFlag()) {
      this.renderer.addClass(this.el.nativeElement, 'renew');
      this.renderer.setProperty(this.el.nativeElement, 'textContent', `Renew by ${this.userservice.renewDate} `);
    }
  }
}


