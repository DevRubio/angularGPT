import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-messages',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './myMessages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessagesComponent { 
  @Input({required:true}) text!:string
}
