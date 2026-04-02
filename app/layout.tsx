import type { Metadata } from "next";
import { Inter, Poppins, Montserrat, Lato, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'], // for headings
  variable: '--font-montserrat',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // buttons
  variable: '--font-poppins',
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700'], // accents
  variable: '--font-orbitron',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'], // for body text
  variable: '--font-inter',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400'], // navbar / links
  variable: '--font-lato',
});
export const metadata: Metadata = {
  title: "Syniciat",
  description: "Top-rated solar energy solutions | Expert consultation, professional installation & maintenance by certified installers. Go solar today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${orbitron.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
