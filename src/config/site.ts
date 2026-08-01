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
  tagline: "Offline Tutors in 5 Cities · Online Classes Worldwide",
  // Used for SEO canonical URLs & sitemap. Set NEXT_PUBLIC_SITE_URL in env.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Kashyap Tutorial & Home Tuition offers personalised home tuition in Greater Noida, Ghaziabad, Gurgaon, Delhi & Patna, plus live online classes worldwide. Expert faculty, small batches, and proven results for Classes 6–12, CBSE/ICSE.",
  ogImage: "/og-image.svg",

  /* ----------------- CONTACT DETAILS ----------------- */
  // >>> EDIT THESE with your real details <<<
  contact: {
    phone: "+91 98765 43210",
    phoneHref: "+919876543210", // no spaces, for tel: links
    whatsapp: "919876543210",
    email: "info@kashyaptutorial.com",
    address: {
      line1: "Main Market Road",
      line2: "Near Civil Hospital",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      pincode: "201001",
      country: "India",
    },
    hours: [
      { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
      { day: "Saturday", time: "8:00 AM – 6:00 PM" },
      { day: "Sunday", time: "Closed (Home visits by appt.)" },
    ],
  },

  /* ----------------- SOCIAL MEDIA ----------------- */
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "",
    linkedin: "",
  },

  /* ----------------- KEY METRICS (Hero) ----------------- */
  metrics: [
    { value: "1500+", label: "Students Taught" },
    { value: "95%", label: "Pass Percentage" },
    { value: "12+", label: "Years of Teaching" },
    { value: "4.9★", label: "Parent Rating" },
  ],

  /* ----------------- NAVIGATION ----------------- */
  nav: [
    { label: "Home", href: "/" },
    { label: "Find a Tutor", href: "/#presence" },
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
    title: "Foundation Classes (6–8)",
    level: "Middle School",
    icon: "📘",
    blurb:
      "Strong conceptual base in Maths, Science, English & SST with activity-based learning.",
    highlights: [
      "CBSE & ICSE syllabus",
      "Weekly tests & progress reports",
      "Spoken English & grammar focus",
      "Doubt-clearing sessions",
    ],
    fee: "Affordable monthly",
  },
  {
    slug: "class-9-10",
    title: "Class 9 & 10 (Board Mastery)",
    level: "Secondary",
    icon: "📗",
    blurb:
      "Targeted board exam preparation with NCERT mastery, sample papers and revision marathons.",
    highlights: [
      "Complete NCERT coverage",
      "Chapter-wise test series",
      "Board pattern mock exams",
      "Practical / internal-assessment help",
    ],
    fee: "Flexible plans",
  },
  {
    slug: "class-11-12-science",
    title: "Class 11 & 12 (Science – PCM/PCB)",
    level: "Senior Secondary",
    icon: "🧪",
    blurb:
      "Physics, Chemistry, Maths & Biology by subject experts with board + entrance focus.",
    highlights: [
      "Experienced faculty per subject",
      "Concept + numerical practice",
      "Previous year question drills",
      "Personal mentoring",
    ],
    fee: "Subject-wise or full",
  },
  {
    slug: "commerce-11-12",
    title: "Class 11 & 12 (Commerce)",
    level: "Senior Secondary",
    icon: "📈",
    blurb:
      "Accountancy, Business Studies & Economics coaching with real-world case studies.",
    highlights: [
      "Accounts problem-solving",
      "BST & Eco concept clarity",
      "Project work guidance",
      "Regular assessments",
    ],
    fee: "Flexible plans",
  },
  {
    slug: "competitive-exams",
    title: "Competitive Exam Prep",
    level: "Foundation / Olympiad",
    icon: "🏆",
    blurb:
      "NTSE, Olympiads, NDA and scholarship exam preparation with shortcut techniques.",
    highlights: [
      "NTSE & Olympiad focus",
      "Speed & accuracy training",
      "Reasoning & aptitude",
      "Mock test analysis",
    ],
    fee: "Course-wise",
  },
  {
    slug: "home-tuition",
    title: "Home Tuition (1-on-1)",
    level: "All Classes",
    icon: "🏠",
    blurb:
      "Personalised home tuition at your doorstep with dedicated individual attention.",
    highlights: [
      "Tutor visits your home",
      "All subjects & classes",
      "Flexible timings",
      "Direct parent–tutor updates",
    ],
    fee: "Per visit / monthly",
  },
];

/* ----------------- WHY CHOOSE US ----------------- */
export const features = [
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    desc: "Qualified teachers with 10+ years of subject expertise who care about each student.",
  },
  {
    icon: "👥",
    title: "Small Batch Size",
    desc: "Limited students per batch ensures personal attention for every learner.",
  },
  {
    icon: "📊",
    title: "Regular Tests & Reports",
    desc: "Weekly tests with detailed performance reports shared directly with parents.",
  },
  {
    icon: "🏠",
    title: "Home Tuition Option",
    desc: "Can't travel? Get the same quality teaching at your doorstep, 1-on-1.",
  },
  {
    icon: "📚",
    title: "Complete Study Material",
    desc: "Curated notes, worksheets and previous papers included — no hidden costs.",
  },
  {
    icon: "💡",
    title: "Concept-First Teaching",
    desc: "We build deep understanding, not rote memorisation, for long-term success.",
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
    name: "Anjali Sharma",
    role: "Parent (Class 10)",
    quote:
      "My daughter's confidence in Maths improved drastically. The regular test reports kept me involved throughout. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Student (Class 12 Science)",
    quote:
      "The Physics teacher made the toughest concepts feel easy. I scored 94% in boards thanks to their guidance.",
    rating: 5,
  },
  {
    name: "Sunita Gupta",
    role: "Parent (Home Tuition)",
    quote:
      "The home tuition service is excellent. The tutor is punctual, patient and my son actually enjoys studying now.",
    rating: 5,
  },
  {
    name: "Mohit Singh",
    role: "Student (Class 9)",
    quote:
      "Small batches mean the sir knows exactly where I'm struggling. My Science marks jumped from 60s to 90s!",
    rating: 5,
  },
  {
    name: "Priya Mishra",
    role: "Parent (Class 11 Commerce)",
    quote:
      "Accounts coaching here is outstanding. The case-study approach really helped my daughter prepare for boards.",
    rating: 5,
  },
  {
    name: "Karan Joshi",
    role: "Student (Class 12 PCB)",
    quote:
      "Personal mentoring and doubt sessions made all the difference for my NEET preparation alongside boards.",
    rating: 5,
  },
];

/* ----------------- RESULTS / Toppers ----------------- */
export const toppers = [
  { name: "Aarav Patel", class: "Class 10 CBSE", percentage: "98.4%", year: "2024" },
  { name: "Diya Sharma", class: "Class 12 Science", percentage: "96.2%", year: "2024" },
  { name: "Ishaan Gupta", class: "Class 10 ICSE", percentage: "95.8%", year: "2024" },
  { name: "Sneha Rao", class: "Class 12 Commerce", percentage: "95.0%", year: "2024" },
  { name: "Vivaan Kumar", class: "Class 10 CBSE", percentage: "94.6%", year: "2023" },
  { name: "Ananya Reddy", class: "Class 12 Science", percentage: "94.2%", year: "2023" },
  { name: "Aditya Nair", class: "Class 10 CBSE", percentage: "93.8%", year: "2023" },
  { name: "Riya Jain", class: "Class 12 Commerce", percentage: "93.4%", year: "2023" },
];

/* ----------------- FAQ ----------------- */
export const faqs = [
  {
    q: "Do you offer home tuition across the whole city?",
    a: "Yes. We provide home tuition across the city and nearby areas. Contact us with your locality and we'll match you with an available tutor.",
  },
  {
    q: "What is the batch size in classroom coaching?",
    a: "We keep batches small — typically 12 to 20 students — so every learner gets personal attention from the teacher.",
  },
  {
    q: "Are study materials included in the fees?",
    a: "Yes. Curated notes, worksheets and previous year question papers are included. There are no hidden charges.",
  },
  {
    q: "How will I track my child's progress?",
    a: "We conduct weekly tests and share detailed performance reports with parents, plus regular meetings on request.",
  },
  {
    q: "Can I take a free demo class before joining?",
    a: "Absolutely. Book a free demo through our Contact page and experience our teaching style before enrolling.",
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
  since: number;
};

export const offlineCities: TutorCity[] = [
  {
    name: "Greater Noida",
    state: "Uttar Pradesh",
    icon: "📍",
    tagline: "Our headquarters — where it all started",
    areas: ["Alpha, Beta, Gamma, Delta", "Sector Pi, Sigma, Omega", "Knowledge Park, Gaur City", "Pari Chowk, Surajpur"],
    available: true,
    tutorCount: 24,
    since: 2012,
  },
  {
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    icon: "📍",
    tagline: "Serving students across all major zones",
    areas: ["Vaishali, Indirapuram, Vaibhav Khand", "Kaushambi, Vasundhara", "Kavi Nagar, Raj Nagar", "Crossing Republik, NH-24"],
    available: true,
    tutorCount: 18,
    since: 2014,
  },
  {
    name: "Gurgaon",
    state: "Haryana",
    icon: "📍",
    tagline: "Premium home tuition in millennium city",
    areas: ["DLF Phase 1-5, Sushant Lok", "Sector 14-57, Golf Course Road", "Sohna Road, MG Road", "Cyber City, Udyog Vihar"],
    available: true,
    tutorCount: 15,
    since: 2016,
  },
  {
    name: "Delhi",
    state: "Delhi NCR",
    icon: "📍",
    tagline: "Covering North, South, East & West Delhi",
    areas: ["Dwarka, Rohini, Pitampura", "Saket, Vasant Kunj, Hauz Khas", "Laxmi Nagar, Preet Vihar", "Janakpuri, Rajouri Garden"],
    available: true,
    tutorCount: 21,
    since: 2015,
  },
  {
    name: "Patna",
    state: "Bihar",
    icon: "📍",
    tagline: "Expanding quality coaching to Bihar",
    areas: ["Kankarbagh, Boring Road", "Patliputra, Fraser Road", "Kumhrar, Gandhi Maidan", "Rajendra Nagar, Boring Canal Rd"],
    available: true,
    tutorCount: 12,
    since: 2018,
  },
];

/* ----------------- OUR TUTORS ----------------- */
export type Tutor = {
  id: string;
  name: string;
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
    id: "rahul-kashyap",
    name: "Rahul Kashyap",
    subjects: ["Physics", "Chemistry", "Maths"],
    city: "Greater Noida",
    experience: 12,
    classes: "Class 9 – 12",
    rating: 4.9,
    studentsTaught: 850,
    mode: "Classroom · Home · Online",
    highlight:
      "Founder mentor with 40+ board toppers. Specialises in making JEE & NEET concepts click.",
  },
  {
    id: "priya-malhotra",
    name: "Priya Malhotra",
    subjects: ["Maths", "Science"],
    city: "Ghaziabad",
    experience: 9,
    classes: "Class 6 – 10",
    rating: 4.9,
    studentsTaught: 620,
    mode: "Home · Classroom",
    highlight:
      "Known for turning 'Maths-phobic' students into confident scorers with step-by-step methods.",
  },
  {
    id: "amit-srivastava",
    name: "Amit Srivastava",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    city: "Ghaziabad",
    experience: 10,
    classes: "Class 11 – 12 Commerce",
    rating: 4.8,
    studentsTaught: 540,
    mode: "Classroom · Online",
    highlight:
      "Commerce specialist who teaches with real-world case studies and past-paper drills.",
  },
  {
    id: "neha-agarwal",
    name: "Neha Agarwal",
    subjects: ["Biology", "Chemistry"],
    city: "Gurgaon",
    experience: 8,
    classes: "Class 11 – 12 (PCB)",
    rating: 4.9,
    studentsTaught: 480,
    mode: "Home · Online",
    highlight:
      "NEET mentor loved for simplified diagrams, mnemonics and focused revision plans.",
  },
  {
    id: "vikram-chauhan",
    name: "Vikram Chauhan",
    subjects: ["Physics", "Maths"],
    city: "Gurgaon",
    experience: 11,
    classes: "Class 9 – 12",
    rating: 4.8,
    studentsTaught: 700,
    mode: "Classroom · Home · Online",
    highlight:
      "Problem-solving coach who builds speed and accuracy through concept + numerical practice.",
  },
  {
    id: "shalini-verma",
    name: "Shalini Verma",
    subjects: ["English", "Social Science", "SST"],
    city: "Delhi",
    experience: 7,
    classes: "Class 6 – 10",
    rating: 4.9,
    studentsTaught: 430,
    mode: "Home · Online",
    highlight:
      "English & SST expert who makes long chapters digestible with mind maps and storytelling.",
  },
  {
    id: "deepak-yadav",
    name: "Deepak Yadav",
    subjects: ["Maths", "Science", "Reasoning"],
    city: "Delhi",
    experience: 10,
    classes: "Class 6 – 12",
    rating: 4.8,
    studentsTaught: 650,
    mode: "Classroom · Online",
    highlight:
      "Olympiad & NTSE coach with a library of shortcut techniques and mock-test analytics.",
  },
  {
    id: "sangeeta-kumari",
    name: "Sangeeta Kumari",
    subjects: ["Maths", "Science"],
    city: "Patna",
    experience: 8,
    classes: "Class 6 – 10",
    rating: 4.9,
    studentsTaught: 500,
    mode: "Home · Classroom",
    highlight:
      "Patient, activity-based teacher who builds strong foundations for board-level confidence.",
  },
  {
    id: "arjun-sinha",
    name: "Arjun Sinha",
    subjects: ["Physics", "Chemistry", "Biology"],
    city: "Patna",
    experience: 9,
    classes: "Class 11 – 12 Science",
    rating: 4.8,
    studentsTaught: 460,
    mode: "Classroom · Online",
    highlight:
      "PCMB mentor focused on board pattern + entrance exam preparation with personal mentoring.",
  },
];

export const onlineCoaching = {
  tagline: "Learn from anywhere in the world",
  description:
    "Our expert tutors deliver live, interactive online classes via Zoom/Google Meet — same quality teaching, zero commute.",
  stats: [
    { value: "20+", label: "Countries Reached" },
    { value: "5,000+", label: "Live Sessions Delivered" },
    { value: "4.8★", label: "Online Student Rating" },
  ],
  slots: [
    { time: "6:00 AM", label: "Early Bird", zone: "IST" },
    { time: "4:00 PM", label: "After School", zone: "IST" },
    { time: "7:00 PM", label: "Evening Batch", zone: "IST" },
    { time: "9:00 PM", label: "Late Night", zone: "IST" },
  ],
  features: [
    { icon: "🖥️", title: "Live Interactive Classes", desc: "Real-time teaching with screen sharing, whiteboard & doubt clearing — not recorded videos." },
    { icon: "📅", title: "Flexible Scheduling", desc: "Pick time slots that work across time zones — morning, afternoon, or evening batches." },
    { icon: "📱", title: "Recorded Sessions", desc: "Every class is recorded so students can revisit any lecture for revision." },
    { icon: "📊", title: "Digital Progress Reports", desc: "Weekly performance analytics shared digitally with parents via WhatsApp/email." },
    { icon: "📝", title: "Digital Study Material", desc: "PDFs, practice sheets, and notes delivered digitally — print or study on-screen." },
    { icon: "🌍", title: "Global Access", desc: "Students from any country can join — CBSE, ICSE, State Board, or international syllabus." },
  ],
};

export default siteConfig;
