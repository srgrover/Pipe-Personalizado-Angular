import { Comment } from '../comments.component';
import { ReplyButtonComponent } from './../../../Shared/Components/reply-button/reply-button.component';
import { Component, Input } from '@angular/core';
import { TimePipe } from "../../../Shared/Pipes/time.pipe";

@Component({
    selector: 'app-comment',
    standalone: true,
    templateUrl: './comment.component.html',
    imports: [ReplyButtonComponent, TimePipe]
})
export class CommentComponent {
  @Input() comment!: Comment;
}
