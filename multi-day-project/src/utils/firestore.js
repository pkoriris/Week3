
import { db } from '../firebase/firebaseConfig';
import { serverTimestamp } from 'firebase/firestore';

// Fetch tickets from Firestore
export const fetchTickets = async () => {
  const ticketsRef = db.collection('tickets');
  const snapshot = await ticketsRef.get();
  return snapshot.docs.map(doc => doc.data());
};

// Add a new ticket
export const addTicket = async (ticket) => {
  const ticketsRef = db.collection('tickets');
  await ticketsRef.add({
    ...ticket,
    createdAt: serverTimestamp(),
  });
};
