import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ปูนปั้น ภู่กันทอง - ผู้เชี่ยวชาญด้านการออกแบบและปั้นลายวัด",
  description: "บริษัทออกแบบพร้อมปั้นลาย และโครงสร้างของวัด มีประสบการณ์การทำงานมามากกว่า 24 ปี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}