import { NextResponse } from 'next/server';
import { Projet } from '@/lib/definitions';

// Simuler une base de données de projets
const projects: Projet[] = [
  {
    id: "1",
    description: "Système de Gestion des Stages",
    statut: "En cours",
    date_debut: new Date("2024-01-15"),
    date_fin: new Date("2024-06-30"),
    domaine: "Développement Web"
  },
  {
    id: "2",
    description: "Application Mobile de Suivi des Cours",
    statut: "Terminé",
    date_debut: new Date("2023-09-01"),
    date_fin: new Date("2024-01-31"),
    domaine: "Développement Mobile"
  },
  {
    id: "3",
    description: "Plateforme d'Apprentissage en Ligne",
    statut: "En cours",
    date_debut: new Date("2024-02-01"),
    date_fin: new Date("2024-12-31"),
    domaine: "E-Learning"
  }
];

export async function GET() {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des projets' },
      { status: 500 }
    );
  }
} 