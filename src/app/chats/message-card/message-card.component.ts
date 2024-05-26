import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { IMessage } from '../IMessage';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="position-relative">
    <div class="chat-messages p-4">
      <div class="chat-message-left pb-4">
        <div class="me-5">
          <img
            [src]="chat().users.avatar_url"
            class="rounded-circle mr-1"
            [alt]="chat().users.full_name"
            width="40"
            height="40"
          />
          <div class="text-muted small text-nowrap mt-2">
            {{ chat().created_at | date : 'M/d/yy h:mm a' }}
          </div>
        </div>
        <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
          <div class="font-weight-bold mb-1">{{ chat().users.full_name }}</div>
          {{ chat().text }}
        </div>
        @if (currentUserId() === chat().sender ) {
        <div class="dropdown">
          <span
            class="mt-3 ms-5"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ...
          </span>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a (click)="deleteMessageClicked()" class="dropdown-item"
                >Delete</a
              >
            </li>
          </ul>
        </div>
        }
      </div>
    </div>
  </div>`,
  styleUrl: './message-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageCardComponent {
  chat = input.required<IMessage>();
  currentUserId = input<string | null>();

  delete = output();

  deleteMessageClicked() {
    this.delete.emit();
  }
}
