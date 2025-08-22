import { Geist } from "next/font/google";
import "../globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "i_shop_project",
  description: "Create by  Vikash Kumar...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable}   antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
