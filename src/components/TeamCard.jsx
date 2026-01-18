// src/components/TeamCard.jsx
export default function TeamCard({ member }) {
  const initial = member?.name?.charAt(0);

  return (
    <div className="glassCard teamCard">
      <div className="teamAvatar" aria-hidden="true">
        {member.img ? (
          <img src={member.img} alt={member.name} className="avatarImg" />
        ) : (
          <div className="teamInitial">{initial}</div>
        )}
      </div>

      <div className="teamInfo">
        <h3 className="teamName">{member.name}</h3>
        <div className="teamRole">{member.role}</div>
        
        {/* The bio is now inside a container to help with the sliding effect */}
        <div className="bioWrapper">
          <p className="teamBio">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}