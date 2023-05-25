import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "МастерОнлайн",
  description: "Мастер всегда на связи",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body class=' w-full '>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
