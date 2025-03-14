import React, { useState } from 'react';
import emot1 from '../../assets/images/Emotion.svg';
import emot2 from '../../assets/images/Emotion2.svg';
import emot3 from '../../assets/images/Emotion3.svg';
import emot4 from '../../assets/images/Emotion4.svg';
import emot5 from '../../assets/images/Emotion5.svg';

const emoticons = [
  { id: 1, src: emot1, label: 'Frustasi' },
  { id: 2, src: emot2, label: 'Sedih' },
  { id: 3, src: emot3, label: 'Biasa' },
  { id: 4, src: emot4, label: 'Senang' },
  { id: 5, src: emot5, label: 'Bahagia' },
];

const MoodInput: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleMoodSelect = (id: number) => {
    setSelectedMood(id);
    const mood = emoticons.find((e) => e.id === id);
    if (mood) {
      localStorage.setItem('selectedMood', JSON.stringify(mood));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h5 className="font-semibold text-2xl leading-text1 tracking-text1">Pilih yang paling mewakili perasaanmu</h5>
      <div className="flex space-x-8 justify-between">
        {emoticons.map((emoticon) => (
          <div
            key={emoticon.id}
            onClick={() => handleMoodSelect(emoticon.id)}
            className={`cursor-pointer p-2 rounded-lg hover:scale-125 transition-transform transform ${selectedMood === emoticon.id ? 'scale-125' : ''}`}
          >
            <img src={emoticon.src} alt={emoticon.label} className="h-32 w-32" />
          </div>
        ))}
      </div>
      {selectedMood && (
        <div className="mt-4">
          <p className="text-lg">Anda memilih mood: {emoticons.find(e => e.id === selectedMood)?.label}</p>
        </div>
      )}
    </div>
  );
};

export default MoodInput;
