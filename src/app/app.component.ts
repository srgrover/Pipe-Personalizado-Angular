import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommentsComponent } from './Components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommentsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Pipe personalizado en Angular';
}
