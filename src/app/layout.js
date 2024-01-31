import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../Components/Layout/Navbar";
import { SessionProvider } from "../store/SessionProvider";
import { Footer } from "../Components/home/footer/Footer";
import { CircularProgressButton } from "../Components/home/componensts/CircularProgressButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider values={{ item: {} }}>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
        <CircularProgressButton />
      </body>
    </html>
  );
}
