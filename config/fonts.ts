import { Fira_Code as FontMono, Luckiest_Guy as FontSans } from "next/font/google"

export const fontSans = FontSans({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-sans"

})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
