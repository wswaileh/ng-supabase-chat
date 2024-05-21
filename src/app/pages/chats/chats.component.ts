import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsComponent { }
