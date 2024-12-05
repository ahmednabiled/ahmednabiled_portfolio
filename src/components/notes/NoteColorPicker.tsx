import { cn } from '../../lib/utils';

interface NoteColorPickerProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const colors = [
  { color: '#1A1F2B', name: 'Dark Gray' },
  { color: '#1E3A8A', name: 'Indigo' },
  { color: '#1E40AF', name: 'Dark Blue' },
  { color: '#2563EB', name: 'Bright Blue' },
  { color: '#1D4ED8', name: 'Blue' },
  { color: '#3B82F6', name: 'Sky Blue' },
  { color: '#10B981', name: 'Emerald Green' },
  { color: '#D97706', name: 'Amber' },
  { color: '#F59E0B', name: 'Gold' },
  { color: '#EF4444', name: 'Crimson' },
];

export const NoteColorPicker = ({ selectedColor, onColorSelect }: NoteColorPickerProps) => {
  return (
    <div className="flex gap-2" role="group" aria-label="Note Color Picker">
      {colors.map(({ color, name }) => (
        <button
          key={color}
          type="button"
          onClick={() => onColorSelect(color)}
          className={cn(
            "w-6 h-6 rounded-full transition-transform hover:scale-110 focus:outline-none",
            selectedColor === color ? "ring-2 ring-blue-500 scale-105" : ""
          )}
          style={{ backgroundColor: color }}
          aria-label={`Select ${name}`}
          title={name}
          tabIndex={0}
        />
      ))}
    </div>
  );
};
