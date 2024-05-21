import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabaseClient: SupabaseClient;
  
  constructor() { 
    this.supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    this.supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        console.log(event);
        console.log(session);
      }
    );
  }

  async signInWithGoogle() {
    await this.supabaseClient.auth.signInWithOAuth({
      provider: 'google'
    });
  }

  async signOut() {
    await this.supabaseClient.auth.signOut();
  }
}
