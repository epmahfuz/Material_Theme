import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = 'light-theme';
  overlay: HTMLElement;

  constructor(private overlayContainer: OverlayContainer){
     this.overlay = overlayContainer.getContainerElement();
   }

   ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  changeTheme(event): void{
    this.theme = event.value;
    if (this.overlay.classList.contains('dark-theme')) {
      this.overlay.classList.remove('dark-theme');
      this.overlay.classList.add('light-theme');
    } else if (this.overlay.classList.contains('light-theme')) {
      this.overlay.classList.remove('light-theme');
      this.overlay.classList.add('dark-theme');
    } else {
      this.overlay.classList.add('light-theme');
    }
  }
}
