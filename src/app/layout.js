
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "SMAN 4 MUARO JAMBI",
  description: "Website profil SMAN 4 Muaro Jambi",
  icons: {
    icon: "/logosmanpa.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
