import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

export interface Comment {
  id: number;
  user: { name: string; surname: string };
  avatar: string;
  date: Date;
  message: string;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  comments: Comment[] = [
    {
      id: 1,
      user: { name: 'Harry', surname: 'Potter' },
      avatar:
        'https://staticg.sportskeeda.com/editor/2023/02/a0bb5-16761310654089-1920.jpg?w=840',
      date: new Date('15-02-2021'),
      message:
        '¡Vaya truco impresionante! Intenté hacerlo con mi varita, pero las cartas se negaron a cooperar. ¿Alguna sugerencia para convencer a las cartas rebeldes, Hermione? 😄',
    },
    {
      id: 1,
      user: { name: 'Hermione', surname: 'Granger' },
      avatar:
        'https://i.pinimg.com/736x/19/14/e2/1914e295aaaf4c5ce5c56474b00978bb.jpg',
      date: new Date('04-05-2022'),
      message:
        '¡Oh, Harry, ¿acaso olvidaste la lección sobre el respeto a las cartas? ¡Son seres mágicos con mente propia! Pero podríamos intentar un encantamiento persuasivo... ¿Ron, alguna idea?',
    },
    {
      id: 1,
      user: { name: 'Ron', surname: 'Weasley' },
      avatar:
        'https://i.pinimg.com/564x/59/10/e9/5910e9ae03fb7d0380bca57c1134569c.jpg',
      date: new Date('20-01-2024'),
      message:
        '¡Bueno, Harry, puedes intentar hablándoles con acento escocés! A las cartas les gusta un buen acento. Funcionó con mis ranas de chocolate una vez. 🐸🍫',
    },
  ];
}
