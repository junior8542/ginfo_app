'use client';

import { useState, useEffect } from 'react';
import { Updated_evenement } from "@/lib/definitions";
import { Events } from "@/components/ui";

export default function EventsPage() {
  const [events, setEvents] = useState<Updated_evenement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
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
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Événements</h1>
        <Events events_arr={events} />
      </div>
    </div>
  );
} 