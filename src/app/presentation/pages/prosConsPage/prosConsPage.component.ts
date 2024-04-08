import { ChatMessageComponent, MyMessagesComponent, TextMessageBoxComponent, TypingLoaderComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-pros-cons-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent
  ],
  templateUrl: './prosConsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsPageComponent {
  
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

    this.OpenAiService.prosConsDiscusser(prompt)
      .subscribe(resp =>{
        this.isLoading.set(false)
        this.messages.update(prev =>[
          ...prev,
          {
            isGpt: true,
            text: resp.content
          }
        ])
      })
  }

 }
