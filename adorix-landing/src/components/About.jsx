import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";


// if you add images later, import them here, e.g.
// import memberOnePhoto from "../assets/team/member-one.jpg";

const team = [
  {
    name: "DeeghayuArandara",
    title: "Project Lead / Backend Developer",
    description:
      "Oversees the ADORIX vision, AI strategy and technical roadmap.",
    photo: null, // replace with memberOnePhoto when you have it
  },
  {
    name: "Member Two",
    title: "Computer Vision Engineer",
    description:
      "Builds the real-time detection, age and gender classification engine.",
    photo: null,
  },
  {
    name: "Member Three",
    title: "Backend & Cloud Engineer",
    description:
      "Designs the analytics pipeline, API layer and remote monitoring.",
    photo: null,
  },
  {
    name: "Member Four",
    title: "Frontend & Kiosk UI Developer",
    description:
      "Crafts the kiosk and dashboard interfaces with pixel-perfect detail.",
    photo: null,
  },
  {
    name: "Member Five",
    title: "3D / Avatar Designer",
    description:
      "Creates the interactive ADORIX avatar and visual identity.",
    photo: null,
  },
  {
    name: "Member Six",
    title: "Marketing & Client Success",
    description:
      "Translates client goals into high-performing kiosk campaigns.",
    photo: null,
  },
];

const About = () => {
  return (
    <section className="section">
      <div className="section__header">
        <p className="section__eyebrow">Our Team</p>
        <h2 className="section__title">The Minds Behind ADORIX</h2>
        <p className="section__subtitle">
          A multi-disciplinary team combining AI research, computer vision,
          product design and marketing to bring the ADORIX kiosk to life.
        </p>
      </div>

      <div className="grid grid--team">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
