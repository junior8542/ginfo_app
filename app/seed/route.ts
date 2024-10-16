
/*
import { db } from '@vercel/postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();

async function createUser() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS utilisateur (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      prenom VARCHAR(255) NOT NULL,
      nomUtilisateur VARCHAR(255) NOT NULL UNIQUE,
      telephone VARCHAR(12) NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      motDePasse TEXT NOT NULL
      genre TEXT NOT NULL
    );
  `;
}

async function createStudent() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS etudiant(
      id  UUID  PRIMARY KEY,
      niveau  VARCHAR(4) NOT NULL,
      filiere VARCHAR (25) NOT NULL,
      CONSTRAINT fk_student FOREIGN KEY (id) REFERENCES utlisateur(id)
    );
  `;


}
async function createTeacher() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS enseignant(
      id UUID PRIMARY KEY,
      domaine TEXT NOT NULL,
      titre TEXT NOT NULL,
      CONSTRAINT fk_teacher FOREIGN KEY (id) REFERENCES utlisateur(id)
    );
  `;


}


async function createRequest() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS  requete(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idEtudiant UUID  NOT NULL,
      idEnseignant UUID  NOT NULL,
      dateRequete DATE NOT NULL,
      description TEXT NOT NULL,
      nature VARCHAR(255) NOT NULL,
      CONSTRAINT fk_etudaint FOREIGN KEY (idEtudiant) REFERENCES etudiant(id),
      CONSTRAINT fk_enseignant FOREIGN KEY (idEnseignant) REFERENCES enseignant(id)
    );
  `;

}

async function createProject() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS projet (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      description TEXT ,
      statut VARCHAR(25) NOT NULL,
      dateDebut DATE NOT NULL,
      dateFin DATE,
      domaine VARCHAR(255) NOT NULL,
    );
  `;

}


async function createProjectStaff() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS dirigeantProjet (
      idManager UUID,
      idProjet UUID,
      role VARCHAR(255) NOT NULL,
      CONSTRAINT fk_idProjet FOREIGN KEY (idProjet) REFERENCES projet(id),
      CONSTRAINT fk_idManager FOREIGN KEY (idManager) REFERENCES utilisateur(id),
      CONSTRAINT pk_dirProjet PRIMARY KEY (idManager,idProjet)
    );
  `;

}

async function createProjectParticipant() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS participantProject (
      idProjet UUID NOT NULL,
      idUtilisateur UUID NOT NULL,
      CONSTRAINT fk_partId FOREIGN KEY (id) REFERENCES utilisateur(id),
      CONSTRAINT fk_projetId FOREIGN KEY (id) REFERENCES projet(id),
      CONSTRAINT pk_pp PRIMARY KEY (idUtilisateur, idProjet)

    );
  `;

}


async function createComment() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS commentaire (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idMessage UUID NOT NULL,
      idUtilisateur UUID NOT NULL,
      dateCommentaire DATE NOT NULL,
      CONSTRAINT fk_Messsage FOREIGN KEY (idMessage) REFERENCES post(id),
      CONSTRAINT fk_utilisateur FOREIGN KEY (idUtilisateur) REFERENCES utilisateur(id)

    );
  `;

}

async function createEvent() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS evenement (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      lieu VARCHAR(255) NOT NULL,
      description TEXT

    );
  `;

}

async function createEventStaff() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS organisateurEvenement (
      idOrganisateur UUID,
      idEvenement UUID,
      role VARCHAR(255) NOT NULL,
      CONSTRAINT fk_idEvenement FOREIGN KEY (idEvenement) REFERENCES evenement(id),
      CONSTRAINT fk_idOrganisateur FOREIGN KEY (idOrganisateur) REFERENCES utilisateur(id),
      CONSTRAINT pk_orgEvenement PRIMARY KEY (idOrganisateur,idEvenement)
    );
  `;

}


async function createEventAttender() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS participantEvenement(
      idParticipant UUID,
      idEvenement UUID,
      CONSTRAINT fk_idEvenement FOREIGN KEY (idEvenement) REFERENCES evenement(id),
      CONSTRAINT fk_idParticipant FOREIGN KEY (idParticipant) REFERENCES utilisateur(id),
      CONSTRAINT pk_partEvenement PRIMARY KEY (idParticipant,idEvenement)
    );
  `;

}

async function createPost() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS post (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idUtilisateur UUID NOT NULL,
      datePost DATE NOT NULL,
      contenu TEXT NOT NULL,
      CONSTRAINT fk_post FOREIGN KEY (idUtilisateur) REFERENCES utilisateur(id)

    );
  `;

}

async function createWorkshop() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS atelierTravail (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idChefAtelier UUID NOT NULL,
      description TEXT,
      CONSTRAINT fk_atelier FOREIGN KEY (idChefAtelier) REFERENCES utilisateur(id)

    );
  `;

}

async function createWorkshopMember() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS membreAtelier(
      idMembre UUID,
      idAtelier UUID,
      CONSTRAINT fk_idAtelier FOREIGN KEY (idAtelier) REFERENCES atelierTravail(id),
      CONSTRAINT fk_idMembre FOREIGN KEY (idMembre) REFERENCES utilisateur(id),
      CONSTRAINT pk_partEvenement PRIMARY KEY (idMembre,idAtelier)
    );
  `;

}

async function createAdmin() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS administrateur (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      prenom VARCHAR(255) NOT NULL,
      telephone VARCHAR(12) NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      motDePasse TEXT NOT NULL
      genre TEXT NOT NULL
    );
  `;
}


*/




export async function GET() {
  return Response.json({ message: 'low key' });
  /*
  try {
    await client.sql`BEGIN`;
    await createUser();
    await createStudent();
    await createTeacher();
    await createProject();
    await createEvent();
    await createPost();
    await createAdmin();
    await createComment();
    await createEventAttender();
    await createEventStaff();
    await createProjectParticipant();
    await createProjectStaff();
    await createRequest();
    await createWorkshop();
    await createWorkshopMember()
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }*/
}
