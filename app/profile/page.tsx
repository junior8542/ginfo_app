'use client';

import { useState, useEffect } from 'react';
import { Utilisateur } from "@/lib/definitions";

export default function ProfilePage() {
  const [user, setUser] = useState<Utilisateur | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch('/api/user/profile');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Erreur lors du chargement du profil:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <div>Utilisateur non connecté</div>;
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil Utilisateur</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Nom</label>
              <p className="mt-1 text-lg text-gray-900">{user.nom}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Prénom</label>
              <p className="mt-1 text-lg text-gray-900">{user.prenom}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Nom d'utilisateur</label>
              <p className="mt-1 text-lg text-gray-900">{user.nom_utilisateur}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <p className="mt-1 text-lg text-gray-900">{user.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Téléphone</label>
              <p className="mt-1 text-lg text-gray-900">{user.teleohone}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600">Genre</label>
              <p className="mt-1 text-lg text-gray-900">{user.genre}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Modifier le profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 