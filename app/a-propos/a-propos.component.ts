import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  imports: [
    RouterModule 
  ],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css',
  standalone: true
})
export class AProposComponent {

}
