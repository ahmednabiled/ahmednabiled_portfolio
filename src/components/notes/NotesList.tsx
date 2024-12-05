import { format, parseISO } from 'date-fns';
import { Trash2 } from 'lucide-react';
import { Note, useNotes } from '../../store/notes';
import { cn } from '../../lib/utils';

interface NotesListProps {
  notes: Note[];
}

export const NotesList = ({ notes }: NotesListProps) => {
  const deleteNote = useNotes((state) => state.deleteNote);

  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, 'MMM dd, yyyy');
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className={cn(
            "p-4 rounded-lg transition-all duration-200 group relative",
            `bg-[${note.color}] hover:bg-opacity-90 shadow-md`
          )}
          style={{ backgroundColor: note.color }}
          aria-label={`Note created on ${formatDate(note.created_at)}`}
        >
          <p className="text-gray-100 whitespace-pre-wrap break-words">{note.content}</p>
          <div className="mt-4 text-sm text-white">
            {formatDate(note.created_at)}
          </div>
          <button
            onClick={() => deleteNote(note.id)}
            className={cn(
              "absolute top-2 right-2 p-2 rounded-full",
              "bg-black/10 hover:bg-black/30",
              "transition-all duration-200",
              "opacity-0 group-hover:opacity-100"
            )}
            aria-label="Delete note"
          >
            <Trash2 className="w-5 h-5 text-white hover:text-gray-200" />
          </button>
        </div>
      ))}
    </div>
  );
};
