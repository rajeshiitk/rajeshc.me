import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajesh Choudhary | Mobile & Full-Stack Engineer",
  description:
    "Mobile and full-stack engineer. Flutter, React Native and Django. I own products end to end, from architecture to store releases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-5xl flex-col sm:px-8 px-4 font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main>{children} </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
