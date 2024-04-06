import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, GptMessageOrthographyComponent, MyMessagesComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TextMessagesBoxEvent, TypingLoaderComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    GptMessageOrthographyComponent,
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

  public messages = signal<Message[]>([])
  public isLoading = signal(false)
  public OpenAiService = inject(OpenAiService)

  handleMessage( prompt:string ){
    this.isLoading.set(true)

    this.messages.update((prev)=>[
      ...prev,
      {
        isGpt: false,
        text: prompt
      }
    ])

    this.OpenAiService.checkOrthography(prompt)
      .subscribe(resp =>{
        this.isLoading.set(false)
        this.messages.update(prev =>[
          ...prev,
          {
            isGpt: true,
            text: resp.message,
            info: resp
          }
        ])
      })
  }

}
