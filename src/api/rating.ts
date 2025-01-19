import { collection, addDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { Rating } from '@/types/rating';

export async function createRating(userId: string, product: string, place: string, flavor: number, look: number, texture: number) {
  const rating: Rating = {
    userId,
    product,
    place,
    flavor,
    look,
    texture,
    createdAt: new Date().toISOString(),
  };
  await addDoc(collection(db, 'ratings'), rating);
}

export async function updateRating(ratingId: string, updatedFields: Partial<Rating>) {
  const ratingRef = doc(db, 'ratings', ratingId);
  await updateDoc(ratingRef, updatedFields);
}

export async function getRatingsByUserId(userId: string) {
  const q = query(collection(db, 'ratings'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Rating);
}
