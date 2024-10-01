"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/PhotoCard";
import styles from '@/styles'
import photo from '../public/sam.jpg'
import Button from "./ui/Button";
import intro from '../public/brain.svg'

const Intro = () => {
  return (
    <>
        <main className="relative bg-[height:50px_50px] bg-[-50%] bg-gradient-to-r from-blue from-10% to-darkBlue to-90% flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <div className={`${styles.xPaddings} relative z-10 mx-auto`}>
                    <div className='flex justify-center rounded-xl bg-white lg:flex-row flex-col mx-auto gap-8 space-x-12 px-5 mb-12'>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-center ">
                                <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                                <Image
                                    src={photo}
                                    height="500"
                                    width="500"
                                    className="w-full object-cover flex align-center"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <h1>Samuel Gasilan, B.A., MACP</h1>
                                <h1>Registered Psychotherapist (Qualifying)</h1>
                                <h1>Certified Trauma-Informed Therapist</h1>
                            </CardBody>
                        </CardContainer>
                        <div className="flex flex-col items-center lg:w-1/2 py-6">
                            <h1 className="my-10 text-2xl font-bold">About The Therapist</h1>
                            <p className="p-3 rounded-md">
                            Samuel Gasilan is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario. He received his Bachelor of Arts in Psychology at York University and a Master of Arts in Counselling Psychology at Yorkville University. Samuel received extensive training and certifications in Somatic Experiencing Therapy and Dialectical Behaviour Therapy and is a Certified Trauma-Informed Therapist. Throughout his professional development, he has attended conferences on applications of different treatment modalities such as behavioural therapy, Applied Behavioural Analysis Therapy, Acceptance-Committed Therapy, Internal Family System, Play Therapy and Solution-Focused Therapy to address various clients' concerns, and more specifically, heavily focused on psychological and mental health issues as a result of Post-traumatic Stress Disorder, Complex and Chronic Traumas.
                            </p>
                            <p className="p-3">
                            Samuel specializes in working with Post-Traumatic Stress Disorder, Complex and Chronic Trauma, Mood disorders such as Anxiety and Depression, Life Transitions and stressors, Neurodevelopmental Disorders and LGBTQAI+ matters. Prior to completing his Master's degree in Counselling Psychology, Samuel extensively worked in the neurodevelopmental field as a Behaviour Therapist and provides Applied Behaviour Analysis Therapy to individuals living with learning disabilities, neurodevelopmental disorders and acquired brain injury deficits between the ages of 4 to 30 years old to teach adaptive coping skills and address concerns related to self-injurious behaviours, aggression to others, property destructions, functional social, living, and self-help skills. Samuel's vast experiences and credentials allow him to provide Psychotherapy, psychoeducation, and Skills Training to individuals from 4 years of age +.
                            </p>
                            <p className="p-3">
                            Samuel's approach to therapy is eclectic - a style where he meets where the client is. He provides a safe, warm, and unconditional positive regard to clients new to therapy or recently encountered life matters that require guided or co-collaborative exploration to examine how it impacts their lives. With other clients, he opts for a more directive approach that challenges and encourages clients to engage in deeper self-reflection on changing maladaptive patterns in their lives that perpetuate their mental health concerns to improve their overall well-being. Samuel believes it is not only about the number of training and certifications that makes therapy effective - it truly lies in the most fundamental need of every human being - the meaning-making and human connection process that facilitates the client's change to good psychological health.
                            </p>
                            <p className="p-3">
                            With this said, the writing and professional introductions are already a barrier to meaning-making and human connection, therefore, if you would like to gauge fit, see how you feel about working with me and see if my services will assist you in meeting your needs, book a free 30-minute consultation with me. You can reach me through my email at samgasilan.psychotherapy@gmail.com
                            </p>
                            <a href="/about">
                                <Button
                                title="Find out more"
                                icon=''
                                position="left"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Intro