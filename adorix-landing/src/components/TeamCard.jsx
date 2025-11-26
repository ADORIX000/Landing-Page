import React from "react";

const TeamCard = ({ name, title, description, photo }) => {
  return (
    <article className="team-card">
      <div className="team-card__avatar">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="team-card__photo"
          />
        ) : (
          <span className="team-card__initial">
            {name ? name.charAt(0) : "M"}
          </span>
        )}
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{title}</p>
      <p className="team-card__description">{description}</p>
    </article>
  );
};

export default TeamCard;
