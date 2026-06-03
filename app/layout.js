import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/Navbar/Navigation";
import Footer from "@/components/Footer/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});


export const metadata = {
  title: "Portfolio",
  description: "Passioned web developer building modern web applications with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
