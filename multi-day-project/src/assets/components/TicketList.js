import { useEffect, useState } from 'react';
import { fetchTickets } from '../utils/firestore';
import { formatDistanceToNow } from 'date-fns';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      const fetchedTickets = await fetchTickets();
      setTickets(fetchedTickets);
    };
    getTickets();
  }, []);

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>Status: {ticket.status}</p>
          <p>Wait Time: {formatDistanceToNow(ticket.createdAt.seconds * 1000, { addSuffix: true })}</p>
        </div>
      ))}
    </div>
  );
}

export default TicketList;
