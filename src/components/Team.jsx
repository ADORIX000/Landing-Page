import TeamCard from "./TeamCard.jsx";

const MEMBERS = [
  { name: "Ayaan Perera", role: "Founder & Product", bio: "Turns venue problems into simple product flows." },
  { name: "Nimali Silva", role: "Operations Lead", bio: "Keeps deployments smooth and consistent." },
  { name: "Kasun Jayawardena", role: "Software Engineer", bio: "Builds fast, reliable dashboards and tools." },
  { name: "Sanjana Rodrigo", role: "AI/ML Engineer", bio: "Focuses on audience signals and insight quality." },
  { name: "Ravindu Fernando", role: "Design & UX", bio: "Makes the kiosk experience clear and friendly." },
  { name: "Ishara Peiris", role: "Partnerships", bio: "Works with venues and brands to scale rollouts." },
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
