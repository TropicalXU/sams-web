import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TermsAndConditions from '@/components/TermsAndConditions'
import React from 'react'

const termsAndConditions = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
        <div className="w-full">
            <Navbar />
            <TermsAndConditions />
            <Footer />
        </div>
    </main>
  )
}

export default termsAndConditions