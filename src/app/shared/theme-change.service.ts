import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeChangeService {
  private themeChange = new Subject();
  themeChanger = this.themeChange.asObservable();

  constructor() { }

  themeChanging(themeName){
    this.themeChange.next(themeName)
  }
}
