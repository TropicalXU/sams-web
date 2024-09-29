import bubble from '../public/therapist.jpg'
import anxiety from '../public/anxiety1.png'
import ptsd from '../public/ptsd.png'
import confused from '../public/confused.png'
import blocks from '../public/construction.png'
import plant from '../public/plant.png'
import learning from '../public/autism.png'
import bpd from '../public/bipolar.png'
import emotion from '../public/emotional.png'
import { FaBrain, FaCheck, FaChild, FaUser, FaUsers } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import check from '../public/checked.png'
import { IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from 'react-icons/io'

export const IMAGES = {
    BUBBLE: bubble,
    ANXIETY: anxiety,
    PTSD: ptsd,
    CONFUSED: confused,
    BLOCKS: blocks,
    PLANT: plant,
    LEARNING: learning,
    BPD: bpd,
    EMOTION: emotion
};

export const includedCards =
    [
        {
            id: 1,
            title: 'Post Traumatic Stress Disorder & Complex Trauma',
            img: IMAGES.PTSD,
            icon: <FaBrain />
        },
        {
            id: 2,
            title: 'Anxiety & Depression',
            img: IMAGES.ANXIETY
        },
        {
            id: 3,
            title: 'Attention Defecit Hyperactive & Autism Spectrum Disorder',
            img: IMAGES.CONFUSED
        },
        {
            id: 4,
            title: 'Social & Emotion Regulation Skills Training',
            img: IMAGES.EMOTION
        },
        {
            id: 5,
            title: 'Applied Behaviour Analysis Therapy',
            img: IMAGES.BLOCKS
        },
        {
            id: 6,
            title: 'Proffesional Development & Life Transitions',
            img: IMAGES.PLANT
        },
        {
            id: 7,
            title: 'Psychoeducations',
            img: IMAGES.LEARNING
        },
        {
            id: 8,
            title: 'Borderline Personality Disorder',
            img: IMAGES.BPD
        },
        {
            id: 9,
            title: 'Adverse Childhood Experiences, Chronic and Complex Traumas',
            img: IMAGES.BPD
        },
    ]


export interface FAQ {
    question: string;
    answer: string;
}


export const links = [
    {
        id: 'link-1',
        icon: 'fa-brands fa-instagram fa-lg text-black px-2 ml-1',
        title: 'Instagram',
        url: 'https://github.com/TropicalXU'
    },
    {
        id: 'link-2',
        icon: 'fa fa-brands fa-linkedin fa-2xl text-white px-2 ml-1',
        title: 'Linkedin',
        url: 'https://www.instagram.com/layerlabs.io'
    },
    {
        id: 'link-3',
        icon: 'fa fa-brands fa-facebook fa-2xl text-white px-2 ml-1',
        title: 'Facebook',
        url: 'https://medium.com/@seanhackettdev'
    },
]

export const cardData = 
    [
        {
            id: 1,
            title: 'Individual Therapy',
            subtitle: 'For myself',
            icon: <FaUser />
        },
        {
            id: 3,
            title: 'Family Therapy',
            subtitle: 'For my family member',
            icon: <FaUsers />
        },
        {
            id: 4,
            title: 'Child Therapy',
            subtitle: 'For my child',
            icon: <FaChild />
        },
    ]


    export const cardData2 = 
    [
        {
            id: 1,
            title: '100% Online',
            subtitle: '100% online therapy offers remote mental health support.',
            icon: <IoMdCheckmarkCircleOutline />
        },
        {
            id: 2,
            title: 'Individually Tailored',
            subtitle: 'Individually tailored online therapy offers personalized care.',
            icon: <IoMdCheckmarkCircleOutline />
        },
        {
            id: 3,
            title: 'Strengths Focused',
            subtitle: "Strengths-focused therapy leverages clients' strengths for growth.",
            icon: <IoMdCheckmarkCircleOutline />
        },

    ]