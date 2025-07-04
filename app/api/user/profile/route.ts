import { NextResponse } from 'next/server';
import { Utilisateur } from '@/lib/definitions';

// Simuler un utilisateur connecté
const user: Utilisateur = {
  id: "1",
  nom: "Dupont",
  prenom: "Jean",
  nom_utilisateur: "jdupont",
  teleohone: "+237 612345678",
  email: "jean.dupont@enset-douala.com",
  mot_de_passe: "hashed_password", // Dans une vraie application, ne jamais renvoyer le mot de passe
  genre: "Masculin"
};

export async function GET() {
  try {
    // Dans une vraie application, vérifier l'authentification ici
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du profil' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    // Dans une vraie application, mettre à jour l'utilisateur dans la base de données
    // et vérifier l'authentification
    
    return NextResponse.json({ message: 'Profil mis à jour avec succès' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du profil' },
      { status: 500 }
    );
  }
} 