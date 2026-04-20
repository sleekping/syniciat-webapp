import type { Metadata } from "next";
import { Inter, Poppins, Montserrat, Lato, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

// export const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['500', '600', '700'], // for headings
//   variable: '--font-montserrat',
// });

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-orbitron',
});
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // buttons// navbar / links
  variable: '--font-poppins',
});

// export const orbitron = Orbitron({
//   subsets: ['latin'],
//   weight: ['500', '600', '700'], // accents
//   variable: '--font-orbitron',
// });
// export const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500'], // for body text
//   variable: '--font-inter',
// });

// export const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-lato',
// });
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
      lang="en" data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${orbitron.variable} h-full antialiased`}
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
