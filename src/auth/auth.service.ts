import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../environments/environment.development';
import SupabaseClient from '@supabase/supabase-js/dist/module/SupabaseClient';
import { createClient } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase!: SupabaseClient;
  private router = inject(Router);
  private currentUserId = signal<string | null>(null);

  constructor() {
    this.supabase = inject(SupabaseService).getSupabaseInstance();
    this.supabase.auth.onAuthStateChange((event, session) => {
      localStorage.setItem('session', JSON.stringify(session?.user));
      if (session?.user) {
        this.router.navigate(['/chats']);
        this.currentUserId.set(session.user.id);
      }
    });
  }

  public isLoggedIn() {
    return localStorage.getItem('session') !== 'undefined';
  }

  public getCurrentUserId() {
    return this.currentUserId;
  }

  async signInWithGoogle() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async signOut() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/login']);
  }
}
