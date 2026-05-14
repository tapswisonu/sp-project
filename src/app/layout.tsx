import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import FloatingActions from "@/components/ui/FloatingActions";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SP Packaging — Packaging Solutions",
  description: "Manufacturer and supplier of PP/HDPE woven fabric rolls, bags, and packaging solutions. Contact us for samples & enquiry.",
  keywords: "PP HDPE woven rolls, packaging, woven bags, laminate, industrial packaging, SP packaging",
  openGraph: {
    title: "SP Packaging",
    description: "Manufacturer and supplier of PP/HDPE woven fabric rolls, bags, and packaging solutions.",
    url: "https://sppackaging.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans text-brand-dark-gray bg-white`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
