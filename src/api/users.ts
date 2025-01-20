import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/config';
import type { User } from '@/types/user';

export async function searchUsers(searchQuery: string): Promise<User[]> {
  console.log('Début de la recherche avec:', searchQuery);

  // D'abord, récupérons tous les utilisateurs pour debug
  const allUsers = await getDocs(collection(db, 'users'));
  console.log('Tous les utilisateurs:', allUsers.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })));

  const cleanedQuery = searchQuery.toLowerCase().trim();
  console.log('Query nettoyée:', cleanedQuery);

  const q = query(
    collection(db, 'users'),
    orderBy('name'),
    where('name', '>=', cleanedQuery),
    where('name', '<=', cleanedQuery + '\uf8ff'),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  console.log('Résultats trouvés:', querySnapshot.size);

  return querySnapshot.docs.map(doc => {
    const data = doc.data() as User;
    console.log('Document trouvé:', { id: doc.id, ...data });
    return {
      uid: doc.id,
      name: data.name
    } as User;
  });
}
