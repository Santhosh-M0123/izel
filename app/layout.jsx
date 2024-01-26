import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Izel Technologies - Web Design, SEO, Website Development company in coimbatore, Ecommerce development",
  description:
    "Izel Technologies is a leading web design, SEO, web development, and ecommerce website development company based in Coimbatore. Get professional digital solutions for website design, custom software development, SEO services, and ecommerce solutions. Contact us today!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="nav_container">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
