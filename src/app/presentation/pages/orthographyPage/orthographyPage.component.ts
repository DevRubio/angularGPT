import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessagesComponent, TypingLoaderComponent } from '@Components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent { }
