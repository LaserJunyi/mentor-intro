import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "川跃维度 - 专业导师团队",
  description: "川跃维度健身培训导师团队介绍",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}