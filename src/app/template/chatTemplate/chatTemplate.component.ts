import { ChatMessageComponent, MyMessagesComponent, TextMessageBoxComponent, TextMessageEvent, TextMessagesBoxEvent, TypingLoaderComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent {
  
  public messages = signal<Message[]>([])
  public isLoading = signal(false)
  public OpenAiService = inject(OpenAiService)

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
