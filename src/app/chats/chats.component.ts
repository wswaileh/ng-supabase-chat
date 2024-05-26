import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChatService } from './chat.service';
import { MessageCardComponent } from './message-card/message-card.component';
import { IMessage } from './IMessage';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessageCardComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsComponent {
  private authService = inject(AuthService);
  private chatService = inject(ChatService);
  private fb = inject(FormBuilder);

  chatForm!: FormGroup;

  chats = signal<IMessage[]>([]);
  currentUserId = signal<string | null>(null);
  deleteMessageModalOpened = signal(false);

  constructor() {
    this.chatForm = this.fb.group({
      chat_message: ['', Validators.required],
    });

    effect(() => {
      this.getListsChat();
    });

    this.currentUserId = this.authService.getCurrentUserId();
  }

  async logout() {
    await this.authService.signOut();
  }

  async sendMessage() {
    const val = this.chatForm.value.chat_message;
    await this.chatService.sendMessage(val);
    this.chatForm.reset();
    this.getListsChat();
  }

  getListsChat() {
    this.chatService
      .getChats()
      .then((res) => {
        if (res) {
          this.chats.set(res as IMessage[]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteMessageHandler(msg: IMessage) {
    this.chatService
      .deleteMessage(msg.id)
      .then(() => {
        this.getListsChat();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
