import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeChangeService } from '../shared/theme-change.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  theme = 'light-theme';
  overlay: HTMLElement;

  constructor(private overlayContainer: OverlayContainer,
    private themeChangeService: ThemeChangeService){
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
   this.themeChangeService.themeChanging(this.theme);
  }

}
