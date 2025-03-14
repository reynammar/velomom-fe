'use server';

import { postJournalData } from '../api/services/journal-service'

interface JournalData {
  mood: string;
  date: Date;
}

export const saveJournalData = async ({ mood, date }: JournalData) => {
  const payload = {
    mood,
    date: date.toISOString().split('T')[0],
  };

  return await postJournalData(payload);
};
