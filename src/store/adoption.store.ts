import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Pet } from '../core/types';

type AdoptionState = {
  adoptedPets: Pet[];
  adoptPet: (pet: Pet) => void;
  isAdopted: (petId: string) => boolean;
};

const useAdoptionStore = create<AdoptionState>()(
  persist(
    (set, get) => ({
      adoptedPets: [],
      adoptPet: pet =>
        set(state => ({
          adoptedPets: [...state.adoptedPets, pet],
        })),
      isAdopted: petId => get().adoptedPets.some(pet => pet.id === petId),
    }),
    {
      name: 'adoption-storage',
    },
  ),
);

export default useAdoptionStore;
