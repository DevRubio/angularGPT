import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChatMessageComponent, MyMessagesComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TextMessagesBoxEvent, TypingLoaderComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';

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

  public messages = signal<Message[]>([{text:'Hola mundo', isGpt: false}])
  public isLoading = signal(false)

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
