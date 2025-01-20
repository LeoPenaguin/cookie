import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { auth } from '@/firebase/config';

export const AuthService = {
    // Connexion avec email/mot de passe
    loginWithEmail: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    // Inscription avec email/mot de passe
    registerWithEmail: async ({ email, password, name }: {
        email: string;
        password: string;
        name: string;
    }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Mettre à jour le profil utilisateur avec le nom
            await updateProfile(userCredential.user, {
                displayName: name
            });

            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    // Connexion avec Google
    loginWithGoogle: async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error) {
            throw error;
        }
    },

    // Déconnexion
    logout: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    }
};
