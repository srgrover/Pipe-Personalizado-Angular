import { Comment } from '../comments.component';
import { ReplyButtonComponent } from './../../../Shared/Components/reply-button/reply-button.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReplyButtonComponent],
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input() comment!: Comment;
}
