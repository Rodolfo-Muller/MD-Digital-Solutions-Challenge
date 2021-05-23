import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number|undefined;
  videoHeight: number|undefined;

  title = 'R3';
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // Este código carga el reproductor de la API en un iframe de manera asíncrona, siguiendo las instrucciones:
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
       tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
  openNewWindow(): void {
    window.open('https://www.youtube.com/watch?v=kqYuyACFVkE', "ventana1" ,"width=1000, height=900, left= 800, scrollbars=NO")
  }
  openNewWindow2(): void {
       window.open('https://www.youtube.com/watch?v=vAvCcjSAGDY', "ventana1" ,"width=1000, height=900, left= 800, scrollbars=NO")
  }
}
