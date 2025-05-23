import { Poppins, Volkhov, Jost } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});
