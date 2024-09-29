import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

const About = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
        <div className="w-full">
            <Navbar />
            <AboutSection />
            <Footer />
        </div>
    </main>
  )
}

export default About