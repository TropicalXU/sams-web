import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const montserrat = ({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: ['swap']
})

// Configure the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Customize font weights as needed
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "Samuel Gasilan",
  description: "Samuel Psychotherapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}, ${poppins.className}`}>
        <div className={`relative ${montserrat}`}>
        {children}
        </div>
      </body>
    </html>
  );
}
