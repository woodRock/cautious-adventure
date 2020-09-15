import React from "react";
import Markdown from "../components/Markdown";
import skills from "../assets/skills.md";

const Skills = () => {
  return (
    <div style={styles.container} className="twitter-style-border">
      <div style={styles.content}>
        <Markdown markdown={skills} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "60%",
    minHeight: "100vh"
  },
  content: {
    padding: "2.5rem"
  }
};

export default Skills;
