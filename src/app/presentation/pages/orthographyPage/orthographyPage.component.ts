import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessagesComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent, TypingLoaderComponent } from '@Components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent { 
  handleMessage( promp:string ){
    console.log({promp})
  }

  handleMessageWithFile( {prompt, file}:TextMessageEvent ){
    console.log({prompt, file})
  }
}
