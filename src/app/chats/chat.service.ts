import { Injectable, inject } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from '../../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private supabase!: SupabaseClient;

  constructor() {
    this.supabase = inject(SupabaseService).getSupabaseInstance();
  }

  async sendMessage(text: string) {
    try {
      const { data, error } = await this.supabase
        .from('chats')
        .insert([{ text }]);
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      alert('Error sending message: ' + error);
      return error;
    }
  }

  async getChats() {
    try {
      const { data, error } = await this.supabase
        .from('chats')
        .select('*,users(*)');
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      alert('Error getting chats: ' + error);
      return error;
    }
  }

  async deleteMessage(id: string) {
    try {
      const { error } = await this.supabase.from('chats').delete().eq('id', id);
      if (error) {
        throw error;
      }
      return true;
    } catch (error) {
      alert('Error deleting message: ' + error);
      return error;
    }
  }
}
