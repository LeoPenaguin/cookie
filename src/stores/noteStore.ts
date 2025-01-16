import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Note } from '@/types/note';

export const useNoteStore = defineStore('noteStore', () => {
  const notes = ref<Note[]>([
    { user: 'Alice', product: 'Pistachio', place: 'Cookie Heaven' },
    { user: 'Bob', product: 'Oreo', place: 'Cafe Delight' },
    { user: 'Charlie', product: 'Basic', place: 'Cookie Corner' },
    { user: 'Diana', product: 'Chocolate Chip', place: 'Sweet Treats' },
    { user: 'Eve', product: 'Peanut Butter', place: 'Cookie Jar' },
    { user: 'Frank', product: 'Macadamia', place: 'Cookie Palace' },
    { user: 'Grace', product: 'White Chocolate', place: 'Cookie World' },
    { user: 'Hank', product: 'Snickerdoodle', place: 'Cookie House' },
    { user: 'Ivy', product: 'Red Velvet', place: 'Cookie Haven' },
    { user: 'Jack', product: 'Mint Chocolate', place: 'Cookie Delight' },
    { user: 'Karen', product: 'Lemon', place: 'Cookie Bliss' },
    { user: 'Leo', product: 'Coconut', place: 'Cookie Paradise' },
    { user: 'Mona', product: 'Almond', place: 'Cookie Dream' },
    { user: 'Nina', product: 'Hazelnut', place: 'Cookie Fantasy' },
    { user: 'Oscar', product: 'Raisin', place: 'Cookie Magic' },
    { user: 'Paul', product: 'Butterscotch', place: 'Cookie Joy' },
    { user: 'Quinn', product: 'Caramel', place: 'Cookie Treats' },
    { user: 'Rose', product: 'Pumpkin Spice', place: 'Cookie Haven' }
  ]);

  return { notes };
});
