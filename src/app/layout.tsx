import Modal from '@/components/pages/public/Modal'
import Nav from '@/components/pages/public/Nav'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}
        {/* GLOBAL MODAL */}
        <Modal />
      </body>
    </html>
  )
}
