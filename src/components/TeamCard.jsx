export default function TeamCard({ member }) {
  const initial = member?.name?.trim()?.[0]?.toUpperCase() || "A";

  return (
    <div className="glassCard teamCard cardHover">
      <div className="teamAvatar" aria-hidden="true">
        <div className="teamInitial">{initial}</div>
      </div>

      <h3 className="teamName">{member.name}</h3>
      <div className="teamRole">{member.role}</div>
      <p className="teamBio">{member.bio}</p>
    </div>
  );
}
