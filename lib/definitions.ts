// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Utilisateur = {
  id: string;
  nom: string;
  prenom : string;
  nom_utilisateur : string;
  teleohone: string;
  email: string;
  mot_de_passe: string;
  genre:"Masculin"|"Féminin"|"Autre"
};
export type Etudiant = {
id :string;
niveau: string;
filiere :string
};
export type Enseignant = {
  id :string;
  domaine: string;
  titre :string
  };
export type Requete = {
  id :string;
  id_etudiant: string;
  id_enseignant :string;
  date_requete : Date;
  description : string;
  nature : string;
  };
export type Projet= {
  id :string;
  description: string;
  statut :string;
  date_debut : Date;
  date_fin : Date;
  domaine : string;
  };
export type Dirigeant_projet = {
  id_manager :string;
  id_projet: string;
  role: string;
};
export type Participant_Projet = {
  id_projet :string;
  id_utilisateur : string;
  
  };
export type Commentaire = {
  id :string;
  id_message: string;
  id_utilisateur :string;
  date_commentaire : Date;
  contenu : string;
  };

  export type Evenement = {
  id :string;
  nom :string;
  lieu : string;
  description : string;
  date_evenement : Date;
  };
  
  export type Updated_evenement = {
    id :string;
    title :string;
    place : string;
    content : string;
    elength : number;
    date : string;
    };
  

  export type Organisateur_evenement = {
  id_organisateur: string;
  id_evenement :string;
  role:string;
  };

  export type Participant_evenement= {
  id_participant: string;
  id_evenement:string;
  };

  export type Post = {
  id :string;
  id_utiisateur: string;
  date_post : Date;
  contenu: string;
  };

  export type Post_like = {
  id_likeur:string;
  id_post: string;
};


export type Like_comment = {
  id_likeur :string;
  id_comment: string;
};

export type Atelier_travail= {
  id :string;
  id_chef_atelier: string;
  description :string;
  };

export type Membre_atelier = {
  id_atelier :string;
  id_membre: string;
  };

export type Administrateur = {
  id: string;
  nom: string;
  prenom : string;
  telephone: string;
  email: string;
  mot_de_passe: string;
};

