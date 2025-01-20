import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User as FirebaseUser
} from 'firebase/auth'
import { doc, setDoc, getDocs, query, collection, where } from 'firebase/firestore'
import { auth, db } from '@/firebase/config'
import type { User } from '@/types/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<FirebaseUser | null>(null)
  const loading = ref(true)

  const isAuthenticated = computed(() => !!user.value)

  // Fonction utilitaire pour nettoyer le nom
  function cleanUsername(name: string): string {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, '') // Enlève tous les caractères spéciaux
  }

  async function registerUser(email: string, password: string, name: string) {
    try {
      const cleanedName = cleanUsername(name)

      // Vérifier si le nom existe déjà
      const nameQuery = query(collection(db, 'users'), where('name', '==', cleanedName))
      const nameSnapshot = await getDocs(nameQuery)

      debugger

      if (!nameSnapshot.empty) {
        throw new Error('Ce nom d\'utilisateur est déjà pris')
      }

      // Créer l'utilisateur Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Préparer les données utilisateur
      const userData: User = {
        uid: userCredential.user.uid,
        email: email,
        name: cleanedName,
        createdAt: new Date()
      }

      // Sauvegarder dans Firestore en utilisant l'UID comme ID de document
      await setDoc(doc(db, 'users', userCredential.user.uid), userData)

      return userCredential
    } catch (error) {
      console.error('Error in registerUser:', error)
      throw error
    }
  }

  async function loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  async function logoutUser() {
    await signOut(auth)
    user.value = null
  }

  async function init() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        loading.value = false
        resolve(currentUser)
      })
    })
  }

  return {
    user,
    loading,
    isAuthenticated,
    registerUser,
    loginUser,
    logoutUser,
    init
  }
})

export default useAuthStore
