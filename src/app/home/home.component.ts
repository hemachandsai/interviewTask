import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('foodTiming', {static: false}) foodTiming: ElementRef;
  @ViewChild('unorderedList', {static: false}) unorderedList: ElementRef;
  @ViewChild('menuItemsList', {static: false}) menuItemsList: ElementRef;
  carouselSettings = {
    loop: true,
    margin: 30,
    stagePadding: 10,
    items: 3,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout : 1500,
    navContainerClass: 'carousel-nav',
    navText : ['<img src="../../assets/icons/slider-arrow-left.png"/>', '<img src="../../assets/icons/slider-arrow-right.png"/>'],
    responsive: {}
  };
  window: any = window;
  previousOffset = 0;
  backgroundPosition = 0;
  menuItems = ['LASAL CHEESE', 'JUMBO CARB SHRIMP','SURMAI CHILLI','CAPO STEAK','ORGANIC FRUIT SALAD', 'PRAWNS BUTTER GARLIC'];
  @HostListener('window:scroll', ['$event']) trackScrollEvent($event){
    this.trackScroll($event)
  };
  constructor() { }
  ngOnInit() {}
  ngAfterViewInit(){
    this.window.$(document).ready(() => {
      this.initCarousel1();
      this.initCarousel2();
      this.initCarousel3();
      this.initCarousel4();
      this.initCarousel5();
    });
  }
  refreshItems(index){
    console.log(this.unorderedList.nativeElement.querySelector('button.active'))
    this.unorderedList.nativeElement.querySelector('button.active').className = '';
    this.unorderedList.nativeElement.querySelectorAll('button')[index].className += 'active';
    this.menuItemsList.nativeElement.querySelectorAll('.item').forEach((item) => {
      if(!item.className.match(/fade/gi)) {
        item.className += ' fade';
      }
    });
    setTimeout(() => {
      this.menuItemsList.nativeElement.querySelectorAll('.item').forEach((item) => {
      if(!item.className.match(/hide/gi)) {
        item.className += ' hide';
      }
    });
      const newClassName = this.menuItemsList.nativeElement.querySelectorAll('.item')[index].className
      .replace(' fade', '').replace(' hide', '');
      if(index === 5) {
        this.menuItemsList.nativeElement.querySelectorAll('.item')[index - 3].className = newClassName;
        this.menuItemsList.nativeElement.querySelectorAll('.item')[index - 2].className = newClassName;
      } else if(index === 0){
        this.menuItemsList.nativeElement.querySelectorAll('.item').forEach((item) => {
            item.className = newClassName;
        }); 
      } else {
        this.menuItemsList.nativeElement.querySelectorAll('.item')[index].className = newClassName;
        this.menuItemsList.nativeElement.querySelectorAll('.item')[index + 1].className = newClassName;
      }
    }, 500);

  }
  trackScroll(event: any){
    if(this.isScrolledIntoView(this.foodTiming.nativeElement)){
        const offset = this.window.pageYOffset;
        if(offset > this.previousOffset){
            this.backgroundPosition -= 5;
        } else {
          this.backgroundPosition += 5;
        }
        this.previousOffset = offset;
    }
  }
   isScrolledIntoView(elem: any){
    const docViewTop = this.window.$(window).scrollTop();
    const docViewBottom = docViewTop + this.window.$(window).height();

    const elemTop = this.window.$(elem).offset().top;
    const elemBottom = elemTop + this.window.$(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  initCarousel1(){
    this.carouselSettings.responsive = {
      300 : {
        items: 1,
        margin: 10
      },
      620 : {
        items: 2,
        margin: 20
      },
      990 : {
        items: 3
      },
      1200: {
        items: 3
      }
    }
    this.window.$('.section3 .owl-carousel').owlCarousel(this.carouselSettings);
  }
  initCarousel2(){
    this.carouselSettings.items = 4;
    this.carouselSettings.navText =
    ['<img src="../../assets/images/arrow-black-left.png"/>', '<img src="../../assets/images/arrow-black-right.png"/>'],
    this.carouselSettings.responsive = {
        300 : {
          items: 1,
          margin: 10
        },
        620 : {
          items: 2,
          margin: 20
        },
        990 : {
          items: 3,
          margin: 30
        },
        1200: {
          items: 4,
          margin: 30
        }
    }
    this.window.$('.section5 .owl-carousel').owlCarousel(this.carouselSettings);
  }
  initCarousel3(){
    this.carouselSettings.responsive = {
      320 : {
        items: 1,
        margin: 10,
      },
      620 : {
        items: 2,
        margin: 10,
      },
      990 : {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3,
        margin: 30
      }
    }
    this.window.$('.section7 .owl-carousel').owlCarousel(this.carouselSettings);
  }
  initCarousel4(){
    const settings = Object.assign({}, this.carouselSettings);
    settings.items = 1;
    settings.dots = true;
    settings.nav = false;
    settings.navText = [];
    settings.responsive = [];
    this.window.$('.section8 .owl-carousel').owlCarousel(settings);
  }
  initCarousel5(){
    this.carouselSettings.items = 6;
    this.carouselSettings.responsive = {
      300 : {
        items: 1,
        margin: 10,
      },
      620 : {
        items: 2,
        margin: 10,
      },
      990 : {
        items: 4,
        margin: 20,
      },
      1200: {
        items: 6,
        margin: 30
      }
    };
    this.window.$('.section10 .owl-carousel').owlCarousel(this.carouselSettings);
  }
}
