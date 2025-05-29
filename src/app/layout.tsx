import type { Metadata } from "next";
import "./globals.css"



export const metadata: Metadata = {
  title: "Techspecialist",
  description: "where innovation meets impact",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-wfvisualsans">
      <body
        className="font-sans"
      >
        {children}
      </body>
    </html>
  );
}
