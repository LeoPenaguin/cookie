import { collection, addDoc, updateDoc, doc, getDocs, query, where, getFirestore, serverTimestamp, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

// Recherche d'utilisateurs
export async function searchUsers(searchTerm: string) {
  const usersRef = collection(db, 'users');
  const q = query(
    usersRef,
    where('name', '>=', searchTerm),
    where('name', '<=', searchTerm + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Gestion des demandes d'amis
export async function sendFriendRequest(fromUserId: string, toUserId: string) {
  await addDoc(collection(db, 'friendRequests'), {
    fromUserId,
    toUserId,
    status: 'pending',
    createdAt: serverTimestamp()
  });
}

export async function acceptFriendRequest(friendshipId: string) {
  const friendshipRef = doc(db, 'friendRequests', friendshipId);
  await updateDoc(friendshipRef, { status: 'accepted' });
}

export async function rejectFriendRequest(friendshipId: string) {
  const friendshipRef = doc(db, 'friendRequests', friendshipId);
  await updateDoc(friendshipRef, { status: 'rejected' });
}

// Ajout de la fonction pour récupérer les requêtes en attente
export async function getPendingFriendRequests(userId: string) {
  const requestsRef = collection(db, 'friendRequests');
  const q = query(
    requestsRef,
    where('toUserId', '==', userId),
    where('status', '==', 'pending')
  );

  const querySnapshot = await getDocs(q);
  const requests = [];

  for (const docRef of querySnapshot.docs) {
    const requestData = docRef.data();
    const fromUserDoc = await getDoc(doc(db, 'users', requestData.fromUserId));

    requests.push({
      id: docRef.id,
      ...requestData,
      fromUser: {
        id: fromUserDoc.id,
        ...fromUserDoc.data()
      }
    });
  }

  return requests;
}

// Récupération des amis
export async function getFriends(userId: string) {
  const friendsQuery = query(
    collection(db, 'friendRequests'),
    where('status', '==', 'accepted'),
    where('fromUserId', '==', userId)
  );

  const querySnapshot = await getDocs(friendsQuery);
  const friends = [];

  for (const docRef of querySnapshot.docs) {
    const friendData = docRef.data();
    const friendDoc = await getDoc(doc(db, 'users', friendData.toUserId));

    friends.push({
      id: docRef.id,
      ...friendData,
      friend: {
        id: friendDoc.id,
        ...friendDoc.data()
      }
    });
  }

  return friends;
}
