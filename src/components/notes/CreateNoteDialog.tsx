import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useNotes } from '../../store/notes';
import { X } from 'lucide-react';
import { NoteColorPicker } from './NoteColorPicker';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import { cn } from '../../lib/utils';

interface CreateNoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateNoteDialog = ({ open, onOpenChange }: CreateNoteDialogProps) => {
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#1A1F2B'); // Default color
  const addNote = useNotes((state) => state.addNote); // Add note function from store
  const { language } = useLanguage(); // Handle translations

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addNote(content, selectedColor); // Pass content and color to the store
      setContent(''); // Reset content
      setSelectedColor('#1A1F2B'); // Reset color
      onOpenChange(false); // Close dialog
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-full max-w-lg bg-[#0B0E14] p-6 rounded-lg shadow-xl"
          )}
        >
          <Dialog.Title className="sr-only">
            {translations.createNote[language]}
          </Dialog.Title>
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={translations.leaveNote[language]}
              className={cn(
                "w-full h-40 bg-[#1A1F2B] resize-none rounded-lg p-4",
                "text-gray-100 placeholder-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
            />
            <div className="flex items-center justify-between mt-4">
              <NoteColorPicker
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor} // Update selected color
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="p-2 rounded-full hover:bg-[#1A1F2B] transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                         transition-colors duration-200 flex items-center gap-2"
                >
                  {translations.addNote[language]}
                </button>
              </div>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
