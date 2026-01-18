import TeamCard from "./TeamCard.jsx";

const MEMBERS = [
  {  
    name: "Deeghayu Arandara", 
    role: "Team Lead & IoT Architect", 
    bio: "Orchestrates the system architecture and hardware integration.",
    img: "/team/deeghayu.jpeg" // Update with your actual file name
  },
  { 
    name: "Binethma Jayawickrama", 
    role: "Computer Vision Engineer", 
    bio: "Powers the real-time audience detection and demographics.",
    img: "/team/binethma.jpeg"
  },
  { 
    name: "Sithika Weerasinghe", 
    role: "Full Stack Developer", 
    bio: "Crafts the user interface and client analytics platform.",
    img: "/team/sithika.jpeg"
  },
  { 
    name: "Chanithma Dangalla", 
    role: "Backend Developer", 
    bio: "Optimizes the backend logic for smart ad targeting.",
    img: "/team/chanithma.jpeg"
  },
  { 
    name: "Sahan Adithya", 
    role: "AI Interaction Designer", 
    bio: "Enables natural voice interaction and AI conversations.",
    img: "/team/sahan.jpeg"
  },
  { 
    name: "Lithira Kalubowila", 
    role: "Data Analytics Specialist", 
    bio: "Measures gaze and attention for engagement insights.",
    img: "/team/lithira.jpeg"
  }
];

export default function Team() {
  return (
    <>
      <div className="sectionHead">
        <h2 className="h2">Meet the team</h2>
        <p className="muted">
          A small team focused on building privacy-aware on-site intelligence for real venues.
        </p>
      </div>

      <div className="grid grid--3 teamGrid">
        {MEMBERS.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </>
  );
}