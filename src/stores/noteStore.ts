import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Note } from '@/types/note';
import useFormStore from './formStore';
import useUserStore from './userStore';

// Fonction utilitaire pour générer des dates aléatoires dans les 30 derniers jours
function getRandomDate() {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}

export default defineStore('noteStore', () => {
  const formStore = useFormStore();
  const userStore = useUserStore();

  const notes = ref([
    // User 1's notes
    {
      id: 1,
      userId: 1,
      product: 'Pistachio',
      placeId: 1,
      createdAt: new Date().toISOString() // aujourd'hui
    },
    {
      id: 2,
      userId: 1,
      product: 'Chocolate Chip',
      placeId: 2,
      createdAt: new Date(Date.now() - 86400000).toISOString() // hier
    },
    {
      id: 3,
      userId: 1,
      product: 'Red Velvet',
      placeId: 3,
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString() // il y a 3 jours
    },

    // User 2's notes
    { id: 4, userId: 2, product: 'Oreo', placeId: 2, createdAt: getRandomDate() },
    { id: 5, userId: 2, product: 'Peanut Butter', placeId: 4, createdAt: getRandomDate() },

    // User 3's notes
    { id: 6, userId: 3, product: 'Basic', placeId: 3, createdAt: getRandomDate() },
    { id: 7, userId: 3, product: 'Macadamia', placeId: 1, createdAt: getRandomDate() },
    { id: 8, userId: 3, product: 'White Chocolate', placeId: 5, createdAt: getRandomDate() },

    // User 4's notes
    { id: 9, userId: 4, product: 'Chocolate Chip', placeId: 4, createdAt: getRandomDate() },
    { id: 10, userId: 4, product: 'Mint Chocolate', placeId: 2, createdAt: getRandomDate() },

    // User 5's notes
    { id: 11, userId: 5, product: 'Peanut Butter', placeId: 5, createdAt: getRandomDate() },
    { id: 12, userId: 5, product: 'Snickerdoodle', placeId: 3, createdAt: getRandomDate() },
    { id: 13, userId: 5, product: 'Lemon', placeId: 1, createdAt: getRandomDate() },

    // More users' notes...
    { id: 14, userId: 6, product: 'Macadamia', placeId: 6, createdAt: getRandomDate() },
    { id: 15, userId: 6, product: 'Coconut', placeId: 2, createdAt: getRandomDate() },
    { id: 16, userId: 7, product: 'White Chocolate', placeId: 7, createdAt: getRandomDate() },
    { id: 17, userId: 7, product: 'Almond', placeId: 4, createdAt: getRandomDate() },
    { id: 18, userId: 8, product: 'Snickerdoodle', placeId: 8, createdAt: getRandomDate() },
    { id: 19, userId: 8, product: 'Hazelnut', placeId: 1, createdAt: getRandomDate() },
    { id: 20, userId: 9, product: 'Red Velvet', placeId: 9, createdAt: getRandomDate() },
    { id: 21, userId: 9, product: 'Raisin', placeId: 3, createdAt: getRandomDate() },
    { id: 22, userId: 10, product: 'Mint Chocolate', placeId: 10, createdAt: getRandomDate() },
    { id: 23, userId: 10, product: 'Butterscotch', placeId: 2, createdAt: getRandomDate() },
    { id: 24, userId: 11, product: 'Lemon', placeId: 1, createdAt: getRandomDate() },
    { id: 25, userId: 11, product: 'Caramel', placeId: 5, createdAt: getRandomDate() },
    { id: 26, userId: 12, product: 'Coconut', placeId: 2, createdAt: getRandomDate() },
    { id: 27, userId: 12, product: 'Pumpkin Spice', placeId: 4, createdAt: getRandomDate() },
    { id: 28, userId: 13, product: 'Almond', placeId: 3, createdAt: getRandomDate() },
    { id: 29, userId: 14, product: 'Hazelnut', placeId: 4, createdAt: getRandomDate() },
    { id: 30, userId: 15, product: 'Raisin', placeId: 5, createdAt: getRandomDate() },
    { id: 31, userId: 16, product: 'Butterscotch', placeId: 6, createdAt: getRandomDate() },
    { id: 32, userId: 17, product: 'Caramel', placeId: 7, createdAt: getRandomDate() },
    { id: 33, userId: 18, product: 'Pumpkin Spice', placeId: 8, createdAt: getRandomDate() },
    { id: 34, userId: 18, product: 'Chocolate Chip', placeId: 1, createdAt: getRandomDate() },
    { id: 35, userId: 17, product: 'Pistachio', placeId: 2, createdAt: getRandomDate() },
    { id: 36, userId: 16, product: 'Oreo', placeId: 3, createdAt: getRandomDate() }
  ]);

  const enrichedNotes = computed<Note[]>(() => {
    return notes.value.map(note => ({
      ...note,
      user: userStore.users.find(u => u.id === note.userId)?.name || 'Unknown',
      place: formStore.placesData.find(p => p.id === note.placeId)?.name || 'Unknown'
    }));
  });

  const sortedNotes = computed<Note[]>(() => {
    return enrichedNotes.value.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  });

  function getNotesByUserId(userId: number): Note[] {
    return sortedNotes.value.filter(note => note.userId === userId);
  }

  return { notes, enrichedNotes, sortedNotes, getNotesByUserId };
});
