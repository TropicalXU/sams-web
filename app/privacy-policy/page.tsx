import React from "react";
import Footer from "@/components/Footer"
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Navbar from "@/components/Navbar";

const privacyPolicy = () => {
    return (

      <main className="relative flex justify-center items-center flex-col overflow-hidden">
          <div className="w-full">
              <Navbar />
              <PrivacyPolicy />
              <Footer />
          </div>
      </main>
    )
  }
  
  export default privacyPolicy