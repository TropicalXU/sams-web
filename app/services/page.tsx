import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Treatments from '@/components/Treatments'
import React from 'react'

const Services = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
    <div className="w-full">
      <Navbar />
        <Treatments />
      <Footer />
    </div>
  </main>
  )
}

export default Services