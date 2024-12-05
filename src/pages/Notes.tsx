import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { NotesList } from '../components/notes/NotesList';
import { CreateNoteDialog } from '../components/notes/CreateNoteDialog';
import { useNotes } from '../store/notes';
import { Plus, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { cn } from '../lib/utils';

export const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notes, isLoading, error, fetchNotes } = useNotes();
  const { language } = useLanguage();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#0B0E14]">
        <Header />
        <main className="container mx-auto px-4 pt-20 pb-8">
          <div className="text-center text-red-500">
            {error}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0E14] text-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">
              {translations.leaveNote[language]}
            </h1>
            <p className="text-gray-400">
              Share your thoughts, ideas, or feedback
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "w-full mb-8 p-4 rounded-lg flex items-center gap-3",
              "bg-[#1A1F2B] hover:bg-[#242936] transition-colors duration-200",
              "text-gray-400 hover:text-gray-300"
            )}
          >
            <Plus className="w-5 h-5" />
            {translations.leaveNote[language]}
          </button>
          
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <NotesList notes={notes} />
          )}
        </div>
      </main>
      <CreateNoteDialog open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};