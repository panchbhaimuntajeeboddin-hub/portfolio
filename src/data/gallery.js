/**
 * Gallery Data File
 * 
 * IMPORTANT FOR ARFAT:
 * To use your own real photos:
 * 1. Drop your photo files into the 'public/images/gallery/' folder.
 * 2. Update the 'src' path below to match your filename (e.g. '/images/gallery/my-hackathon.jpg').
 * 3. Update the title, caption, category, and date.
 * 
 * The current entries use local placeholder SVGs with clear labels so everything looks stunning immediately!
 */

export const galleryCategories = [
  "All",
  "College Events",
  "Hackathons",
  "Achievements",
  "Memories"
];

export const galleryItems = [
  {
    id: "gal-1",
    title: "National Hackathon Finale",
    category: "Hackathons",
    date: "March 2025",
    caption: "36 hours of relentless debugging, architecture design, and building prototypes under pressure.",
    location: "Tech Campus Hall",
    src: "/images/gallery/hackathon-1.svg",
    alt: "Hackathon project building session"
  },
  {
    id: "gal-2",
    title: "Annual Tech Symposium Keynote",
    category: "College Events",
    date: "October 2024",
    caption: "Presenting real-time AI solutions and machine learning pipelines to department peers and faculty.",
    location: "Main University Auditorium",
    src: "/images/gallery/symposium-1.svg",
    alt: "Tech symposium student presentation"
  },
  {
    id: "gal-3",
    title: "Project Exhibition Recognition",
    category: "Achievements",
    date: "February 2025",
    caption: "Celebration and recognition for RoadGuard AI road defect detection prototype.",
    location: "Innovation Arena",
    src: "/images/gallery/award-1.svg",
    alt: "Project exhibition award and recognition"
  },
  {
    id: "gal-4",
    title: "AI & Cloud Architecture Workshop",
    category: "College Events",
    date: "December 2024",
    caption: "Hands-on engineering workshop exploring containerization, REST microservices, and model deployment.",
    location: "Advanced Computing Lab",
    src: "/images/gallery/workshop-1.svg",
    alt: "AI and Cloud workshop"
  },
  {
    id: "gal-5",
    title: "Smart City Innovation Sprint",
    category: "Hackathons",
    date: "August 2024",
    caption: "Collaborating with fellow engineers to build citizen welfare accessibility web apps.",
    location: "Innovation Hub",
    src: "/images/gallery/hackathon-2.svg",
    alt: "Smart city hackathon collaboration"
  },
  {
    id: "gal-6",
    title: "RoadGuard AI Live Prototype Demo",
    category: "Achievements",
    date: "January 2025",
    caption: "Live computer vision inference demonstration evaluating defect detection on real camera footage.",
    location: "Seminar Hall B",
    src: "/images/gallery/project-expo-1.svg",
    alt: "Live AI demonstration"
  },
  {
    id: "gal-7",
    title: "Computer Engineering Batch Meet",
    category: "Memories",
    date: "November 2024",
    caption: "Celebrating semester milestone presentations with batchmates and mentors.",
    location: "Campus Courtyard",
    src: "/images/gallery/memories-1.svg",
    alt: "Computer engineering batch milestone"
  },
  {
    id: "gal-8",
    title: "Late Night Code & Debug Sessions",
    category: "Memories",
    date: "Semester Labs",
    caption: "Turning coffee and curiosity into working software algorithms before sprint deadlines.",
    location: "CS Lab 3",
    src: "/images/gallery/memories-2.svg",
    alt: "Late night coding session"
  }
];
