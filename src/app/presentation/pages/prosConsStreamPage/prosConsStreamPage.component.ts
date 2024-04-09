import { ChatMessageComponent, MyMessagesComponent, TypingLoaderComponent, TextMessageBoxComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-pros-cons-stream-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent
  ],
  templateUrl: './prosConsStreamPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsStreamPageComponent {
  
  
  public messages = signal<Message[]>([])
  public isLoading = signal(false)
  public OpenAiService = inject(OpenAiService)

  public abortSignal = new AbortController()

  async handleMessage( promp:string ){

    this.abortSignal.abort()
    this.abortSignal = new AbortController

    this.messages.update(prev=>[
      ...prev,
      {
        isGpt: false,
        text: promp
      },
      {
        isGpt: true,
        text: '...'
      }
    ])

    
    this.isLoading.set(true)

    const stream = this.OpenAiService.prosConsStreamDiscusser(promp, this.abortSignal.signal)   
    
    this.isLoading.set(false)

    for await(const text of stream){
      this.handleStreamResponse(text)
    }
  }

  handleStreamResponse(message: string){
    this.messages().pop()
    const messages = this.messages()

    this.messages.set([...messages, {isGpt: true, text: message}])
  }
 }
