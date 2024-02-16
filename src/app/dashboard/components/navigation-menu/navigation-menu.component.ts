import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent implements AfterViewInit {
  @ViewChild('navigation') navigation! : ElementRef

  constructor(private router: Router, private sidebarService : SidebarService) {}
  ngAfterViewInit(): void {
    this.sidebarService.setNavigatorElement(this.navigation.nativeElement);
  }


  
  items : any[] = [
    {
      title: "Home",
      icon: "uil uil-estate",
      path: "",
      active: true
    },
    {
      title: "Search",
      icon: "uil uil-search",
      path: "search",
    },
    {
      title: "History",
      icon: "uil uil-history",
      path: "history"
    },

  ];



  isActiveRoute(route: string): boolean {

    const actualRoute = this.router.url.split('/').pop();
    return actualRoute === route;
  }

  toggleSidebar = () : void => {
    this.sidebarService.toggleSideBar()
  }

  setActiveClass = (selectedItem: any) => {
    this.items.forEach((item)=> {
      item.active = false;
    })
    selectedItem.active = true;
  }



}
