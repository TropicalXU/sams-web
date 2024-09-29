import FaqAccordion from '@/components/Faq';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import { FAQ } from '@/constants';
import React from 'react'

const faqs: FAQ[] = [
  {
    question: 'What is online therapy, and how does it work?',
    answer: 'Online therapy allows you to receive counseling and support through video calls, phone sessions, or messaging, making it accessible from the comfort of your home.',
  },
  {
    question: 'Is online therapy as effective as in-person therapy?',
    answer: 'Yes, research shows that online therapy can be just as effective as in-person therapy for many mental health concerns.',
  },
  {
    question: 'What issues can I address in therapy?',
    answer: 'Therapy can help with a wide range of issues, including anxiety, depression, stress, relationship problems, trauma, and personal growth.',
  },
  {
    question: 'How long does each therapy session last?',
    answer: 'Each therapy session typically lasts 50 minutes, but the length can be adjusted based on your needs and preferences.',
  },
  {
    question: 'How do I know if you’re the right therapist for me?',
    answer: "The best way to find out is to schedule an initial consultation, where we can discuss your needs and see if we're a good fit.",
  },
  {
    question: 'How often should I attend therapy sessions?',
    answer: "The frequency of sessions depends on your individual needs and goals, but most clients start with weekly sessions and adjust as needed.",
  },
  {
    question: 'Is my information confidential?',
    answer: "Yes, your privacy is protected by law, and all information shared in therapy is confidential, except in cases where safety is a concern.",
  },
  {
    question: 'What if I need to cancel or reschedule a session?',
    answer: "Please provide at least 24 hours' notice if you need to cancel or reschedule a session to avoid a cancellation fee.",
  },
  {
    question: 'Do you offer sliding scale fees or accept insurance?',
    answer: "I offer a limited number of sliding scale slots based on financial need, and I can provide you with a receipt for insurance reimbursement if your plan covers out-of-network therapy.",
  },
  {
    question: 'What technology do I need for online therapy?',
    answer: "You’ll need a stable internet connection, a device with a camera and microphone (like a smartphone, tablet, or computer), and a private, quiet space for sessions.",
  },
  // Add more FAQs as needed
];

const Faq = () => {
  return (
    <main className="relative flex justify-center items-center flex-col ">
    <div className="w-full">
      <Navbar />
        <div className="flex flex-col gap-20  xl:flex-col">
        <FaqAccordion faqs={faqs} />
      </div>
      <Footer />
    </div>
  </main>
  )
}

export default Faq