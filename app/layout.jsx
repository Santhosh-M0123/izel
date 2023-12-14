import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Izel | The community empowered by the students",
  description:
    "Upscale your business in digital world - Izel is the community empowered by the skilled students to build and deploy your idea into the world of digital at the minimal of cost",
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
