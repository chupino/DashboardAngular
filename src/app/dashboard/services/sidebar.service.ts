import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private mainElement = new BehaviorSubject<HTMLElement | null>(null);
  private navigatorElement = new BehaviorSubject<HTMLElement | null>(null);
  
  constructor() { }

  currentMainElement = this.mainElement.asObservable();
  currentNavigatorElement = this.navigatorElement.asObservable();

  setMainElement = (mainElement : HTMLElement) => {
    this.mainElement.next(mainElement);
  }

  setNavigatorElement = (navigatorElement : HTMLElement) => {
    this.navigatorElement.next(navigatorElement);
  }


  toggleSideBar = () => {
    this.mainElement.value?.classList.toggle('active');
    this.navigatorElement.value?.classList.toggle('active');
  }
}
