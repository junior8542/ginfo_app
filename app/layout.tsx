import "@/styles/globals.css";
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "GINFO - ENSET Douala",
  description: "Département de Génie Informatique de l'ENSET de Douala",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen bg-primary">
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
