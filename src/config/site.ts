/**
 * =====================================================================
 *  SITE CONFIG  -  Kashyap Tutorial & Home Tuition
 * =====================================================================
 *  This is the SINGLE place to edit your business information.
 *  Change phone, address, classes, testimonials, etc. here and the
 *  whole site (navbar, footer, SEO, contact, structured data) updates.
 * =====================================================================
 */

export const siteConfig = {
  name: "Kashyap Tutorial & Home Tuition",
  shortName: "Kashyap Tutorial",
  tagline: "Building Strong Concepts · Shaping Bright Futures | Er. N. Jha Sir & Teams",
  // Used for SEO canonical URLs & sitemap. Set NEXT_PUBLIC_SITE_URL in env.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kashyap-tutorial.vercel.app",
  description:
    "Kashyap Tutorial & Home Tuition in Alpha 1, Greater Noida. Expert Coaching & Home Tuitions by Er. N. Jha Sir & Teams for Class 6–12 (CBSE & ICSE), IIT-JEE, NEET, CUET. Quality Education at Your Doorstep!",
  ogImage: "/og-image.svg",

  /* ----------------- CONTACT DETAILS ----------------- */
  contact: {
    phone: "+91 7903244838",
    phoneHref: "+917903244838", // no spaces, for tel: links
    whatsapp: "917903244838",
    email: "kashyaptutorial014@gmail.com",
    address: {
      line1: "Alpha 1",
      line2: "Near Alpha 1 Market",
      city: "Greater Noida",
      state: "Uttar Pradesh",
      pincode: "201310",
      country: "India",
    },
    hours: [
      { day: "Mon – Sat", time: "9:00 AM – 10:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },

  /* ----------------- SOCIAL MEDIA ----------------- */
  social: {
    facebook: "https://www.facebook.com/kashyaptutorial014",
    instagram: "https://www.instagram.com/kashyaptutorial",
    youtube: "https://youtube.com/@kashyaptutorial",
    twitter: "",
    linkedin: "https://www.linkedin.com/company/kashyap-tutorial/",
  },

  /* ----------------- KEY METRICS (Hero) ----------------- */
  metrics: [
    { value: "200+", num: 200, suffix: "+", label: "5-Star Google Reviews" },
    { value: "100%", num: 100, suffix: "%", label: "Concept Clarity Focus" },
    { value: "12+", num: 12, suffix: "+", label: "Years of Excellence" },
    { value: "1500+", num: 1500, suffix: "+", label: "Students Guided" },
  ],

  /* ----------------- NAVIGATION ----------------- */
  nav: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Tutors", href: "/tutors" },
    { label: "Results", href: "/results" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/* ----------------- COURSES ----------------- */
export type Course = {
  slug: string;
  title: string;
  level: string;
  icon: string; // emoji or short label
  blurb: string;
  highlights: string[];
  fee?: string;
};

export const courses: Course[] = [
  {
    slug: "class-6-to-8",
    title: "Class 6 – 8 (Foundation)",
    level: "Middle School",
    icon: "foundation",
    blurb:
      "Strong foundation for a bright future. Maths, Science, English & SST with 100% focus on concept clarity.",
    highlights: [
      "CBSE & ICSE (All Subjects)",
      "Strong foundation building",
      "Regular tests & progress reports",
      "Doubt-clearing sessions",
    ],
    fee: "Affordable monthly",
  },
  {
    slug: "class-9-10",
    title: "Class 9 – 10 (Board Excellence)",
    level: "Secondary",
    icon: "board",
    blurb:
      "Board excellence with concept clarity. Complete NCERT mastery, sample paper drills and revision marathons.",
    highlights: [
      "CBSE & ICSE Boards",
      "Chapter-wise test series",
      "Board pattern mock exams",
      "Small batch size attention",
    ],
    fee: "Flexible plans",
  },
  {
    slug: "class-11-12-science",
    title: "Class 11 & 12 (CBSE / ICSE Boards)",
    level: "Senior Secondary",
    icon: "science",
    blurb:
      "Topper's preparation for Physics, Chemistry, Maths & Biology by subject experts led by Er. N. Jha Sir.",
    highlights: [
      "Expert subject faculty",
      "Concept + numerical practice",
      "Previous year question drills",
      "Personal mentoring & doubt sessions",
    ],
    fee: "Subject-wise or full",
  },
  {
    slug: "jee-neet-cuet",
    title: "IIT-JEE | NEET | CUET Prep",
    level: "Competitive Entrance",
    icon: "target",
    blurb:
      "JEE Mains + Advanced, NEET (UG) and CUET preparation with smart strategies and proven results.",
    highlights: [
      "Smart entrance strategies",
      "Speed & accuracy training",
      "Regular mock test analysis",
      "Formula & trick workshops",
    ],
    fee: "Course-wise",
  },
  {
    slug: "home-tuition",
    title: "Home Tuition (KG to 12th)",
    level: "Personalised 1-on-1",
    icon: "home",
    blurb:
      "Quality education at your doorstep! Experienced & verified tutors with flexible timing and 1-on-1 focus.",
    highlights: [
      "All subjects (KG to 12th)",
      "Experienced & verified tutors",
      "Personalised attention",
      "Flexible timing & parent updates",
    ],
    fee: "Per visit / monthly",
  },
  {
    slug: "pcb-11-12",
    title: "Class 11 & 12 (PCB / Biology)",
    level: "Senior Secondary & NEET",
    icon: "science",
    blurb:
      "Comprehensive Biology, Physics & Chemistry coaching for Class 11-12 Board Exams and NEET (UG) medical entrance.",
    highlights: [
      "NCERT line-by-line mastery",
      "Diagram & reasoning drills",
      "NEET previous years questions",
      "Weekly test series",
    ],
    fee: "Flexible plans",
  },
];

/* ----------------- WHY CHOOSE US ----------------- */
export const features = [
  {
    icon: "faculty",
    title: "Expert Faculties",
    desc: "Led by Er. N. Jha Sir (Maths Faculty, Mentor, Guide, Motivator) & dedicated subject experts.",
  },
  {
    icon: "users",
    title: "Small Batch Size",
    desc: "Limited students per batch to guarantee personal attention for every single learner.",
  },
  {
    icon: "test",
    title: "Regular Tests & Analysis",
    desc: "Weekly chapter tests and performance reports shared directly with parents.",
  },
  {
    icon: "clarity",
    title: "100% Concept Clarity",
    desc: "Deep concept-first teaching from basics to brilliance, eliminating mugging up.",
  },
  {
    icon: "home",
    title: "Home Tuition (KG-12th)",
    desc: "Experienced tutors deliver personalized 1-on-1 education right at your doorstep.",
  },
  {
    icon: "star",
    title: "200+ 5-Star Reviews",
    desc: "Highest rated tutorial in Greater Noida trusted by hundreds of parents & students.",
  },
];

/* ----------------- TESTIMONIALS ----------------- */
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Parent (Class 10, Greater Noida)",
    quote:
      "Er. N. Jha Sir's approach to Maths is extraordinary. My son scored 96% in Class 10 boards and lost all fear of Mathematics!",
    rating: 5,
  },
  {
    name: "Priyanshu Verma",
    role: "Student (Class 12 JEE Batch)",
    quote:
      "The concept clarity and numerical shortcuts taught at Kashyap Tutorial helped me crack JEE Mains. Best coaching in Alpha 1!",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Parent (Home Tuition)",
    quote:
      "The home tutor provided by Kashyap Tutorial is punctual, polite, and extremely qualified. My daughter's grades jumped from 70% to 92%.",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    role: "Student (Class 9 CBSE)",
    quote:
      "Small batch size means I can ask any doubt without hesitation. Doubts are cleared on the spot with real-life examples.",
    rating: 5,
  },
  {
    name: "Meenakshi Singh",
    role: "Parent (Class 11 Science)",
    quote:
      "Regular tests and performance reports keep us completely updated. The faculty is genuinely invested in every child's success.",
    rating: 5,
  },
  {
    name: "Aditya Raj",
    role: "Student (NEET Aspirant)",
    quote:
      "Biology and Chemistry lectures here are super structured. Chapter-wise tests and smart study materials made all the difference.",
    rating: 5,
  },
];

/* ----------------- RESULTS / Toppers ----------------- */
export const toppers = [
  { name: "Aarav Patel", class: "Class 10 CBSE", percentage: "98.4%", year: "2024", badge: "Top Rank 1" },
  { name: "Diya Sharma", class: "Class 12 PCM (Science)", percentage: "96.2%", year: "2024", badge: "Topper Rank 2" },
  { name: "Ishaan Gupta", class: "Class 10 ICSE", percentage: "95.8%", year: "2024", badge: "Distinction" },
  { name: "Sneha Rao", class: "Class 12 PCB (Science)", percentage: "95.0%", year: "2024", badge: "Star Scorer" },
  { name: "Vivaan Kumar", class: "Class 10 CBSE", percentage: "94.6%", year: "2023", badge: "Distinction" },
  { name: "Ananya Reddy", class: "Class 12 PCM (Science)", percentage: "94.2%", year: "2023", badge: "Distinction" },
  { name: "Aditya Nair", class: "Class 10 CBSE", percentage: "93.8%", year: "2023", badge: "Star Scorer" },
  { name: "Riya Jain", class: "Class 12 PCB (Science)", percentage: "93.4%", year: "2023", badge: "Star Scorer" },
];

/* ----------------- FAQ ----------------- */
export const faqs = [
  {
    q: "Where is Kashyap Tutorial located?",
    a: "We are located at Alpha 1, Greater Noida (Near Alpha 1 Market). We offer classroom coaching at our center as well as Home Tuitions across Greater Noida, Ghaziabad, Gurgaon, Delhi & Patna.",
  },
  {
    q: "Who leads the faculty at Kashyap Tutorial?",
    a: "Our core faculty is led by Er. N. Jha Sir (Maths Faculty, Mentor, Guide, Motivator) along with a team of experienced subject experts for Physics, Chemistry, Biology & Foundation subjects.",
  },
  {
    q: "Do you provide Home Tuition for all classes?",
    a: "Yes! We provide 1-on-1 Home Tuitions from KG to Class 12th for all subjects across CBSE, ICSE, and State Boards with experienced & verified tutors.",
  },
  {
    q: "What is the batch size in classroom coaching?",
    a: "We strictly maintain small batch sizes so that Er. N. Jha Sir and our faculty can give personalized attention to every student.",
  },
  {
    q: "How can I book a Free Demo Class?",
    a: "You can call or WhatsApp us directly at +91 7903244838 or submit the demo request form on our website.",
  },
];

/* ----------------- TUTORING PRESENCE ----------------- */
export type TutorCity = {
  name: string;
  state: string;
  icon: string;
  tagline: string;
  areas: string[];
  available: boolean;
  tutorCount: number;
  localitiesCount?: string;
  since: number;
};

export const offlineCities: TutorCity[] = [
  {
    name: "Greater Noida",
    state: "Uttar Pradesh",
    icon: "pin",
    tagline: "Main Center & Headquarters — Alpha 1 Market",
    areas: ["Alpha 1 & 2, Beta 1 & 2", "Gamma, Delta, Sector Pi", "Knowledge Park, Gaur City", "Pari Chowk, Surajpur"],
    available: true,
    tutorCount: 250,
    localitiesCount: "40+",
    since: 2012,
  },
  {
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    icon: "pin",
    tagline: "Serving students across major zones",
    areas: ["Vaishali, Indirapuram", "Kaushambi, Vasundhara", "Kavi Nagar, Raj Nagar", "Crossing Republik"],
    available: true,
    tutorCount: 20,
    since: 2014,
  },
  {
    name: "Gurgaon",
    state: "Haryana",
    icon: "pin",
    tagline: "Premium home tuition in millennium city",
    areas: ["DLF Phase 1-5, Sushant Lok", "Sector 14-57, Golf Course Rd", "Sohna Road, MG Road", "Cyber City area"],
    available: true,
    tutorCount: 18,
    since: 2016,
  },
  {
    name: "Delhi",
    state: "Delhi NCR",
    icon: "pin",
    tagline: "Covering South, East & West Delhi",
    areas: ["Dwarka, Rohini, Pitampura", "Saket, Vasant Kunj, Hauz Khas", "Laxmi Nagar, Preet Vihar", "Janakpuri"],
    available: true,
    tutorCount: 25,
    since: 2015,
  },
  {
    name: "Patna",
    state: "Bihar",
    icon: "pin",
    tagline: "Quality home tuition & entrance coaching",
    areas: ["Kankarbagh, Boring Road", "Patliputra, Fraser Road", "Kumhrar, Gandhi Maidan", "Rajendra Nagar"],
    available: true,
    tutorCount: 15,
    since: 2018,
  },
];

/* ----------------- OUR TUTORS ----------------- */
export type Tutor = {
  id: string;
  name: string;
  image?: string;
  subjects: string[];
  city: string;
  experience: number; // years
  classes: string;
  rating: number;
  studentsTaught: number;
  mode: string;
  highlight: string;
};

export const tutors: Tutor[] = [
  {
    id: "n-jha-sir",
    name: "Er. N. Jha Sir",
    image: "/images/faculty-njha.webp",
    subjects: ["Mathematics", "IIT-JEE Maths", "Class 9-12 Maths"],
    city: "Greater Noida (Alpha 1)",
    experience: 12,
    classes: "Class 8 – 12 & Entrance",
    rating: 5.0,
    studentsTaught: 1200,
    mode: "Classroom · Home Tuition · Live Online",
    highlight:
      "Lead Maths Faculty & Founder Mentor. Known for making complex JEE & Board concepts intuitive and scoring.",
  },
  {
    id: "riddhima-maam",
    name: "Riddhima Ma'am",
    image: "/images/faculty-riddhima.webp",
    subjects: ["All Core Subjects (KG-10th)", "Science", "Maths", "English"],
    city: "Greater Noida (Alpha 1)",
    experience: 7,
    classes: "KG – Class 10th",
    rating: 5.0,
    studentsTaught: 540,
    mode: "Classroom · Home Tuition · Live Online",
    highlight:
      "7+ years experienced senior educator specializing in KG to 10th grade foundation, conceptual clarity, and personalized offline & online mentoring.",
  },
  {
    id: "priya-malhotra",
    name: "Priya Malhotra",
    subjects: ["Science", "Physics"],
    city: "Greater Noida",
    experience: 9,
    classes: "Class 6 – 10",
    rating: 4.9,
    studentsTaught: 620,
    mode: "Home · Classroom",
    highlight:
      "Specialist in building conceptual foundation in Physics & Chemistry for middle and high school students.",
  },
  {
    id: "pankaj-sharma",
    name: "Dr. Pankaj Sharma",
    subjects: ["Chemistry", "NEET Prep", "JEE Organic Chemistry"],
    city: "Greater Noida / Ghaziabad",
    experience: 11,
    classes: "Class 11 – 12 (PCM / PCB)",
    rating: 4.9,
    studentsTaught: 580,
    mode: "Classroom · Online",
    highlight:
      "Chemistry specialist who builds deep understanding in Organic, Physical & Inorganic Chemistry for Boards & NEET.",
  },
  {
    id: "neha-agarwal",
    name: "Neha Agarwal",
    subjects: ["Biology", "NEET Prep"],
    city: "Greater Noida / Gurgaon",
    experience: 8,
    classes: "Class 11 – 12 (PCB)",
    rating: 4.9,
    studentsTaught: 480,
    mode: "Home · Online",
    highlight:
      "NEET mentor loved for simplified NCERT diagrams, mnemonics and focused entrance revision strategies.",
  },
  {
    id: "vikram-chauhan",
    name: "Vikram Chauhan",
    subjects: ["Physics", "Chemistry"],
    city: "Greater Noida / Delhi",
    experience: 11,
    classes: "Class 9 – 12",
    rating: 4.8,
    studentsTaught: 700,
    mode: "Classroom · Home · Online",
    highlight:
      "Numerical & practical problem-solving coach who builds high speed and accuracy for entrance exams.",
  },
];

export const onlineCoaching = {
  tagline: "Learn from anywhere in the world",
  description:
    "Live, interactive online classes led by Er. N. Jha Sir & expert faculty — same quality teaching, real-time doubt solving, zero commute.",
  stats: [
    { value: "20+", num: 20, suffix: "+", label: "Countries Reached" },
    { value: "5,000+", num: 5000, suffix: "+", label: "Live Sessions Delivered" },
    { value: "4.9★", num: 4.9, decimals: 1, suffix: "★", label: "Online Student Rating" },
  ],
  slots: [
    { time: "6:00 AM", label: "Early Bird", zone: "IST" },
    { time: "4:00 PM", label: "After School", zone: "IST" },
    { time: "7:00 PM", label: "Evening Batch", zone: "IST" },
    { time: "9:00 PM", label: "Late Night", zone: "IST" },
  ],
  features: [
    { icon: "monitor", title: "Live Interactive Classes", desc: "Real-time teaching with screen sharing, digital whiteboard & doubt clearing." },
    { icon: "calendar", title: "Flexible Scheduling", desc: "Pick time slots that fit your daily schedule — morning, afternoon, or evening batches." },
    { icon: "video", title: "Recorded Sessions", desc: "Class recordings available so students can revise topics anytime." },
    { icon: "test", title: "Digital Progress Reports", desc: "Weekly test reports shared digitally with parents via WhatsApp." },
    { icon: "material", title: "Smart Study Material", desc: "PDFs, practice sheets, formula handbooks, and revision notes." },
    { icon: "globe", title: "Global Access", desc: "Students worldwide can join for CBSE, ICSE, State Board, or entrance prep." },
  ],
};

export default siteConfig;

