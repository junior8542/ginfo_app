'use client';

import { useState, useEffect } from 'react';
import styles from "@/styles/style";
import { Hero, Business, Stats, Billing, CardDeal, Testimonials, Clients, CTA } from "@/components";
import { Updated_evenement } from "@/lib/definitions";

// Fonction pour simuler la récupération des événements
const fetchEvent = async (): Promise<Updated_evenement[]> => {
  return [
    {
      id: "1",
      title: "Événement 1",
      place: "Salle A",
      content: "Description de l'événement 1",
      date: "2024-03-20",
      elength: 3
    },
    {
      id: "2",
      title: "Événement 2",
      place: "Salle B",
      content: "Description de l'événement 2",
      date: "2024-03-21",
      elength: 3
    },
    {
      id: "3",
      title: "Événement 3",
      place: "Salle C",
      content: "Description de l'événement 3",
      date: "2024-03-22",
      elength: 3
    }
  ];
};

// Fonction pour mettre à jour un événement
const update_event = (event: Updated_evenement, length: number): Updated_evenement => {
  return {
    ...event,
    title: `${event.title} (${length})`,
    elength: length
  };
};

export default function Page() {
  const [events, setEvents] = useState<Updated_evenement[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les événements au montage du composant
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchEvent();
        let elength = fetchedEvents.length;
        const u_events: Updated_evenement[] = [];
        
        if (fetchedEvents.length >= 3) {
          elength = 3;
        }
        
        for (let index = 0; index < elength; index++) {
          u_events.push(update_event(fetchedEvents[index], elength));
        }
        
        setEvents(u_events);
      } catch (error) {
        console.error('Erreur lors du chargement des événements:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Business events_arr={events}/>
            <Stats />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}

