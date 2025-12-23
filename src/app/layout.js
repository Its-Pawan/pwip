import { Work_Sans, Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";


export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-sans",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
    ${workSans.variable}
    ${inter.variable}
    ${poppins.variable}
    ${dmSans.variable}
  `}
      >
        {children}
      </body>
    </html>
  );
}
