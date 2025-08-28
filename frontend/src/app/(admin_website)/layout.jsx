import { Geist } from "next/font/google";
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
        <Header />
        <div className="mt-16 flex min-h-[81vh]">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
