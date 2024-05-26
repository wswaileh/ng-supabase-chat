import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ChatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SupaChat';
}
