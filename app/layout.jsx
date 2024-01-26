import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Software Solutions Company in Coimbatore | Izel",
  description:
    "Izel is the leading software solution company based in Coimbatore. We offer the best-in-class services including website development, UI/UX design, app development, and more. Contact us today for top-notch digital solutions!",
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
