import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
    <div className="w-full">
      <Navbar />
        <ContactPage />
      <Footer />
    </div>
  </main>
  )
}

export default Contact