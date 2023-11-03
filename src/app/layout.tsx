import "./globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import LayoutClientChild from "./layout-client-child";

export const metadata = {
  title: "Senior Project - Consumer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutClientChild>{children}</LayoutClientChild>;
}
