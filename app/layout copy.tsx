//import { Geist, Geist_Mono } from "next/font/google"
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google"
import "./globals.css"
//import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar"; // ✅ Importarlo con mayúscula
const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Fuente principal (Plus Jakarta Sans)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

// Fuente secundaria (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

//const geist = Geist({subsets:['latin'],variable:'--font-sans'})

/*const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) /*{return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        plusJakarta.variable,
        "font-sans"
      )}
    >
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )*/
  {return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className={cn(plusJakarta.variable, "antialiased")}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
