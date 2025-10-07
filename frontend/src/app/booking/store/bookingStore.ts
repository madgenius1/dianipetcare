import { create } from 'zustand'

export const useBookingStore = create((set) => ({
  step: 1,
  pet: {},
  booking: {},
  owner: {},
  setStep: (step) => set({ step }),
  setPet: (data) => set({ pet: data }),
  setBooking: (data) => set({ booking: data }),
  setOwner: (data) => set({ owner: data }),
  clearAll: () => set({ step: 1, pet: {}, booking: {}, owner: {} }),
}))
