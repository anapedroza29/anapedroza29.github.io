import React from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import {SkillsData} from "../../data/skills";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
    <label className="section-title">Skills</label>
    <div className="skills-container">
      {data.map((item, index) => {
        return (
          <div className="skills-section" key={index}>
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill, skillIndex) => {
                return <SkillCard key={skillIndex} skill={skill} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
 );
}

export default Skills;