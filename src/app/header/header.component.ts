import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBanner = true;
  window: any = window;
  searchToggled = false;
  @HostListener('window:scroll', ['$event']) trackScrollEvent($event){ this.trackScroll($event) }
  constructor() { }

  ngOnInit() {
  }

  trackScroll(event: any){
    const scrollOffset = this.window.pageYOffset;
    if ( scrollOffset > 0) {
      this.showBanner = false;
    } else {
      this.showBanner = true;
    }
  }
  toggleSearch(){
    this.searchToggled = !this.searchToggled;
  }
}
