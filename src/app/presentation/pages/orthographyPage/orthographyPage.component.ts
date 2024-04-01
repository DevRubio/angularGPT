import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessagesComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TextMessagesBoxEvent, TypingLoaderComponent } from '@Components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
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

  handleMessageWithSelect(event: TextMessagesBoxEvent){
    console.log(event)
  }

}
