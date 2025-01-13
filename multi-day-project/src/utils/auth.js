import { auth } from '../firebase/firebaseConfig';

// Sign In function
export const signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error("Error signing in: ", error.message);
  }
};

// Sign Out function
export const signOut = () => {
  auth.signOut();
};
