import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '~/components/theme-provider'
import { Toaster } from '~/components/ui/sonner'
import { ny } from '~/lib/utils'
import '~/styles/globals.css'

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
})

export const metadata: Metadata = {
   title: 'ARlink',
   description: 'Deploy your applications on arweave with ease',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <Script
               src="https://www.googletagmanager.com/gtag/js?id=G-XH8V4MQH0P"
               strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
               {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XH8V4MQH0P');
               `}
            </Script>
         </head>
         <body
            className={ny(
               'bg-background min-h-screen font-sans antialiased',
               fontSans.variable,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               disableTransitionOnChange
            >
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   )
}
