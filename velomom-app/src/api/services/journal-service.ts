import api from '../core/core';

interface PostJournalPayload {
  mood: string;
  date: string;
}

export const postJournalData = async (data: PostJournalPayload) => {
  const response = await api.post('/journal', data);
  return response.data;
};
