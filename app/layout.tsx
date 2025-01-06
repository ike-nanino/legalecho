import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";




export const metadata: Metadata = {
  title: "Legal Echo - Legal Practitioners",
  description: "We are ranked as a tier 1/top tier law firm in Ghana by The Legal 500 in the following practice areas: Banking, Finance, M&A, Commercial, Corporate, Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-nespresso  antialiased`}
      >
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
