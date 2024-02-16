import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationMenuComponent } from '../components/navigation-menu/navigation-menu.component';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationMenuComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('main') main! : ElementRef;

  constructor(private sidebarService : SidebarService){

  }
  ngAfterViewInit(): void {
    this.sidebarService.setMainElement(this.main.nativeElement);
  }

}
