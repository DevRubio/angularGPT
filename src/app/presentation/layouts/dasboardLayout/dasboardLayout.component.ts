import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dasboard-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dasboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DasboardLayoutComponent { }
