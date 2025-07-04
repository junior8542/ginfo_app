'use client';

import { useState, useEffect } from 'react';
import { Projet } from "@/lib/definitions";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{project.description}</h2>
              <p className="text-gray-600 mb-4">Domaine: {project.domaine}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(project.date_debut).toLocaleDateString()} - {new Date(project.date_fin).toLocaleDateString()}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.statut === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                  project.statut === 'Terminé' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.statut}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 