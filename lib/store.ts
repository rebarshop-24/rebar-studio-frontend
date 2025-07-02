import { create } from 'zustand';

export const useRebarStore = create((set) => ({
  uploadedFile: null,
  setUploadedFile: (file) => set({ uploadedFile: file }),
}));