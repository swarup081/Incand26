import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import TribalTrackbar from "~/components/TrivalNavbar";

export const metadata: Metadata = {
  title: "Tribal Fest",
  description: "NIT Silchar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="relative">
        {children}
        <TribalTrackbar/>
      </body>
    </html>
  );
}