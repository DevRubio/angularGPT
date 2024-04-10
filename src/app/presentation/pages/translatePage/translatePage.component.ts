import { ChatMessageComponent, MyMessagesComponent, TypingLoaderComponent, TextMessagesBoxEvent, TextMessageBoxSelectComponent } from '@Components/index';
import { Message } from '@Interfaces/message.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessagesComponent,
    TypingLoaderComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './translatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TranslatePageComponent { 
  public messages = signal<Message[]>([])
  public isLoading = signal(false)
  public OpenAiService = inject(OpenAiService)

  public languages = signal ([
    { id: 'alemán', text: 'Alemán' },
    { id: 'árabe', text: 'Árabe' },
    { id: 'bengalí', text: 'Bengalí' },
    { id: 'francés', text: 'Francés' },
    { id: 'hindi', text: 'Hindi' },
    { id: 'inglés', text: 'Inglés' },
    { id: 'japonés', text: 'Japonés' },
    { id: 'mandarín', text: 'Mandarín' },
    { id: 'portugués', text: 'Portugués' },
    { id: 'ruso', text: 'Ruso' },
  ])

  handleMessageWithSelect({prompt, selectedOption}:TextMessagesBoxEvent){
    const message = `Traduce a ${selectedOption}: ${prompt}`

    this.isLoading.set(true)
    this.messages.update(prev =>[...prev,{text:message, isGpt: false}])

    this.OpenAiService.translador(prompt, selectedOption)
      .subscribe(({message}) =>{
        this.isLoading.set(false)
        this.messages.update(prev=>[...prev,{text:message, isGpt: true}])
      })
  }
}
