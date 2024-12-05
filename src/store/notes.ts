import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Note {
  id: string;
  content: string;
  created_at: string;
  color: string;
}

interface NotesState {
  notes: Note[];
  isLoading: boolean;
  error: string | null;
  fetchNotes: () => Promise<void>;
  addNote: (content: string, color: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

export const useNotes = create<NotesState>((set, get) => ({
  notes: [],
  isLoading: false,
  error: null,

  fetchNotes: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ notes: data || [], error: null });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  addNote: async (content: string, color: string) => {
    set({ isLoading: true });
    try {
      const { error } = await supabase
        .from('notes')
        .insert([{ content, color }]);

      if (error) throw error;
      get().fetchNotes();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteNote: async (id: string) => {
    set({ isLoading: true });
    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      get().fetchNotes();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
}));