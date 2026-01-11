import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'CodeConcepts',
  description: 'Chapter-wise explanation of programming concepts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 sm:pt-16 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  )
}
