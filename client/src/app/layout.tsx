import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/Dashboard/SideMenu";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kajakezelő",
  description: "Kolikaja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = true
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {loggedin && (

        <SideMenu />
        )}
        {children}
      </body>
    </html>
  );
}