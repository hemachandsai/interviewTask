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
  showNavBlocks = true;
  @HostListener('window:scroll', ['$event']) trackScrollEvent($event){ this.trackScroll($event)}
  @HostListener('window:resize', ['$event']) trackResizeEvent($event){ this.trackResize()}

  constructor() { }

  ngOnInit() {
    this.checkWindowSize();
  }

  trackScroll(event: any){
    const scrollOffset = this.window.pageYOffset;
    if ( scrollOffset > 0 || this.window.innerWidth <= 1127) {
      this.showBanner = false;
    } else {
      this.showBanner = true;
    }
  }
  trackResize(){
    this.checkWindowSize();
  }

  checkWindowSize(){
    if(this.window.innerWidth < 1127){
      this.showBanner = false;
    } else {
      this.showBanner = true;
    }
  }

  toggleSearch(){
    this.searchToggled = !this.searchToggled;
  }
}
