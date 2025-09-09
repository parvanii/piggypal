import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PiggyPal",
  description:
    "AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.className} ${geistMono.className} antialiased`}
        >
          <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900/20 transition-all duration-300">
            
            {/* Soft Rose Glow Dual Corners */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/30 dark:bg-pink-700/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 dark:bg-pink-800/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Your Content/Components */}
            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer/>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
