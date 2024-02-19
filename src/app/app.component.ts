import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButton,
    MatAnchor,
    MatChipListbox,
    MatChipOption,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-material-3-experimental';
}
