import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button';
import {MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatDrawerContainer} from '@angular/material/sidenav';
import { ClienteComponent } from './cliente/cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule, 
    MatListModule, 
    MatButtonModule,
    MatIconButton,
    MatSidenavModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'base';
  showContent = true;
  constructor(private router: Router) {

  } 

  navigate(path: string) { 
    this.showContent = true;
    this.router.navigate([path]); 
  }

  toggleDrawer(drawerOpened: boolean){
    this.showContent = !drawerOpened;    
  }
}
