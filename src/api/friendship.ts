import { collection, addDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { Friendship } from '@/types/Friendship';

export async function sendFriendRequest(userId: string, friendId: string) {
  const friendship: Friendship = {
    userId,
    friendId,
    status: 'pending',
    createdAt: new Date(),
  };
  await addDoc(collection(db, 'friendships'), friendship);
}

export async function acceptFriendRequest(friendshipId: string) {
  const friendshipRef = doc(db, 'friendships', friendshipId);
  await updateDoc(friendshipRef, { status: 'accepted' });
}

export async function rejectFriendRequest(friendshipId: string) {
  const friendshipRef = doc(db, 'friendships', friendshipId);
  await updateDoc(friendshipRef, { status: 'rejected' });
}

export async function getFriends(userId: string) {
  const q = query(collection(db, 'friendships'), where('userId', '==', userId), where('status', '==', 'accepted'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Friendship);
}
