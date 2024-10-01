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
            subtitle: 'Offered in both virtual and in-person sessions',
            icon: <FaUser />,
            description: "Individual Therapy provides a personalized approach to address your unique mental health needs, offering a safe and supportive environment to explore personal challenges, emotional struggles, and life transitions. Whether you're dealing with anxiety, depression, trauma, or simply seeking self-improvement, each 50-minute session is designed to help you gain clarity, develop coping strategies, and foster personal growth. Therapy sessions are available both in-person and virtually, giving you the flexibility to choose the format that best suits your lifestyle and comfort."
        },
        {
            id: 3,
            title: 'Child Therapy',
            subtitle: 'Offered in both virtual and in-person sessions',
            icon: <FaChild />,
            description: "Child Therapy provides a personalized and nurturing approach to support your child's unique mental health needs. In a safe and supportive environment, children can explore personal challenges, emotional struggles, and life transitions. Whether they are dealing with anxiety, behavioral issues, trauma, or seeking to improve their self-esteem, each 50-minute session is designed to help them gain clarity, develop coping strategies, and foster emotional growth. Therapy sessions are available both in-person and virtually, allowing you to choose the format that best suits your child’s lifestyle and comfort."
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

    export const aboutInfo = {
        name: 'Samuel Gasilan',
        introduction: 'Helping individuals achieve mental well-being.',
        bio: 'Dr. Jane Doe is a licensed psychotherapist with over 15 years of experience in cognitive behavioral therapy, trauma counseling, and mindfulness techniques.'
      };
      
      export const certificationsData = [
        { title: 'Dialectical Behavior Therapy (DBT)', 
          issuer: 'PESI', 
          year: '2023',
          img: '/cert1.jpg' 
        },
        { title: 'Telehealth and DBT: Best Practices, Essential Skills, and Ensuring Safety', 
          issuer: 'PESI', 
          year: '2023' ,
          img: '/cert2.jpg'
        },
        { title: 'Dialectical Behavior Therapy Skills Training for Children and Adolescents', 
          issuer: 'PESI', 
          year: '2023',
          img: '/cert3.jpg'
        },
        { title: 'Foundations of Somatic Therapy for Trauma: The 9 Key Techniques for Effective Body-Based Therapy', 
          issuer: 'PESI', 
          year: '2023',
          img: '/cert4.jpg'
        },
        { title: 'Somatic Therapy to Tame the Survival Response and Health Implicit Trauma Memories', 
          issuer: 'PESI', 
          year: '2023',
          img: '/cert5.jpg'
        },
        { title: 'Somatic Therapy to Create Healthy Attachment: Strategies to Heal Development and Relational Trauma', 
          issuer: 'PESI', 
          year: '2024',
          img: '/cert6.jpg'
        },
        { title: 'Broken Connection: Healing Strategies for Attachment Injury and Relational Trauma', 
          issuer: 'PESI', 
          year: '2024',
          img: '/cert7.jpg'
        },
      ];
      