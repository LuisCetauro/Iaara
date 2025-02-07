import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Componentes/Navbar/NavBar";
import Footer from "./Componentes/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Karen Cris Store", template: "%s Karen Cris Store" },
  description: "A moda passa, o estilo permanece",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
