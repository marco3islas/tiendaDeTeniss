import { Component } from '@angular/core';
import {Opinion} from '../interfaces/opinion';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent {

  opinions: Opinion[] = [
    {
      name: 'Juan Hernandez',
      content: 'Lorem Lorem ipsum dolor sit amet...'
    },
    {
      name: 'Juan Hernandez',
      content: 'Lorem Lorem ipsum dolor sit amet...'
    },
    {
      name: 'Juan Hernandez',
      content: 'Lorem Lorem ipsum dolor sit amet...'
    },
  ];


}
