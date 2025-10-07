import { create } from 'zustand'

export interface PetDetails {
  name: string
  type: string
  age: number | ''
}

export interface BookingDetails {
  date: string
  time: string
  service: string
}

export interface OwnerDetails {
  fullName: string
  phone: string
  email: string
}

export interface BookingStore {
  step: number
  pet: PetDetails
  booking: BookingDetails
  owner: OwnerDetails
  setStep: (step: number) => void
  setPet: (data: PetDetails) => void
  setBooking: (data: BookingDetails) => void
  setOwner: (data: OwnerDetails) => void
  clearAll: () => void
}

const initialPet: PetDetails = { name: '', type: '', age: '' }
const initialBooking: BookingDetails = { date: '', time: '', service: '' }
const initialOwner: OwnerDetails = { fullName: '', phone: '', email: '' }

export const useBookingStore = create<BookingStore>((set) => ({
  step: 1,
  pet: initialPet,
  booking: initialBooking,
  owner: initialOwner,

  setStep: (step) => set({ step }),
  setPet: (data) => set({ pet: data }),
  setBooking: (data) => set({ booking: data }),
  setOwner: (data) => set({ owner: data }),
  clearAll: () => set({ step: 1, pet: initialPet, booking: initialBooking, owner: initialOwner }),
}))
